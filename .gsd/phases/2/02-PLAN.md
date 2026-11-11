# Phase 2 — Plan 2.2: Activate Resend Email Dispatch

## Goal
Uncomment and activate the Resend email-sending block in `/api/contact/route.ts` so the
contact form actually delivers emails to `hasnainshahriar2007@gmail.com`.

## Wave
Wave 2 — depends on Plan 2.1 (rate limiting) being completed first.

## Scope
- **File to edit:** `redtrace/src/app/api/contact/route.ts`
- **Package:** Already installed — `resend`
- **Env vars:** Already in `.env.local` — `RESEND_API_KEY`, `CONTACT_TO_EMAIL=hasnainshahriar2007@gmail.com`

## Tasks

### Task 1 — Replace the commented Resend block with live code
The current commented block (lines 54–77) should be replaced with:
```ts
  // Send email via Resend
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { success: false, message: "Unable to send your message right now." },
      { status: 500 },
    );
  }
```

### Task 2 — Remove the dev-fallback console.log line
Remove: `console.log("📩 Contact form:", { name, email, message });`

### Task 3 — Build check
Run: `cd D:\My Portofoleo\redtrace; npm run build`
Expected: exit 0

### Task 4 — Commit
```
cd D:\My Portofoleo\redtrace
git add src/app/api/contact/route.ts
git commit -m "feat(phase-2): activate Resend email dispatch on /api/contact"
```

## Verification Criteria
- [ ] `npm run build` exits 0
- [ ] Commented Resend block is GONE — replaced with live `try { ... } catch` block
- [ ] `console.log("📩 Contact form:", ...)` line is removed
- [ ] `resend.emails.send(...)` is called with `to: process.env.CONTACT_TO_EMAIL!`
- [ ] Git commit exists with message `feat(phase-2): activate Resend email dispatch on /api/contact`
