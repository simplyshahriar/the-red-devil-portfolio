# Phase 2 — Plan 2.1: Wire Upstash Redis Rate Limiting

## Goal
Add IP-based sliding-window rate limiting (5 req / 60 s) to `/api/contact/route.ts` using
the already-installed `@upstash/ratelimit` + `@upstash/redis` packages and the env vars
already present in `.env.local`.

## Wave
Wave 1 — no other tasks depend on this; Resend (Plan 2.2) depends on this being wired first.

## Scope
- **File to edit:** `redtrace/src/app/api/contact/route.ts`
- **Packages:** Already installed — `@upstash/ratelimit`, `@upstash/redis`
- **Env vars:** Already in `.env.local` — `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`

## Tasks

### Task 1 — Add imports at top of route.ts
Add after `import { NextResponse } from "next/server";`:
```ts
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
```

### Task 2 — Create Redis + Ratelimit client (module-level singletons)
Add after the imports, before `type Body`:
```ts
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
  analytics: false,
});
```

### Task 3 — Enforce rate limit inside POST() before validation
Add after `export async function POST(req: Request) {` (before the try/catch that parses body):
```ts
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";
  const { success: rateLimitOk } = await ratelimit.limit(ip);
  if (!rateLimitOk) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please wait a minute and try again." },
      { status: 429 },
    );
  }
```

### Task 4 — TypeScript check
Run: `cd D:\My Portofoleo\redtrace; npx tsc --noEmit`
Expected: exit 0, 0 errors

### Task 5 — Commit
```
cd D:\My Portofoleo\redtrace
git add src/app/api/contact/route.ts
git commit -m "feat(phase-2): wire Upstash Redis rate limiting on /api/contact"
```

## Verification Criteria
- [ ] `npx tsc --noEmit` exits 0
- [ ] `route.ts` imports `Redis` and `Ratelimit`
- [ ] `ratelimit.limit(ip)` is called before body parsing
- [ ] Returns 429 JSON `{ success: false, message: "Too many requests..." }` when limit exceeded
- [ ] Git commit exists with message `feat(phase-2): wire Upstash Redis rate limiting on /api/contact`
