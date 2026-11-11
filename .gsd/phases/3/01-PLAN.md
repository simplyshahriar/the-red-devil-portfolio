# Phase 3 — Plan 3.1: Cyberpunk Orange Theme — globals.css + SectionCounter + ScrollProgress

## Goal
Replace all Periwinkle (#7B8FE8) accent colors with Cyberpunk Orange (#FF5C00) in
globals.css, SectionCounter.tsx, and the ScrollProgress component in page.tsx.

## Wave: 1 (no dependencies)

## Tasks

### Task 1 — globals.css: Full orange rebrand
File: `redtrace/src/app/globals.css`

Replace:
- Scrollbar track: `#0A0C10` → `#09090B`
- Scrollbar thumb hover: `#7B8FE8` → `#FF5C00`
- `scrollbar-color`: `#2F3540 #0A0C10` → `#2F3540 #09090B`
- `::selection` background: `rgba(123, 143, 232, 0.3)` → `rgba(255, 92, 0, 0.3)`
- `:focus-visible` outline: `#7B8FE8` → `#FF5C00`

Final globals.css should look like:
```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-mono), ui-monospace, SFMono-Regular, monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ============ MARQUEE ============ */
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee-scroll 40s linear infinite;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* ============ CUSTOM SCROLLBAR ============ */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #09090B;
}

::-webkit-scrollbar-thumb {
  background: #2F3540;
  border-radius: 10px;
  border: 2px solid #09090B;
}

::-webkit-scrollbar-thumb:hover {
  background: #FF5C00;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #2F3540 #09090B;
}

/* ============ SELECTION ============ */
::selection {
  background: rgba(255, 92, 0, 0.3);
  color: #fff;
}

/* ============ FOCUS ============ */
:focus-visible {
  outline: 2px solid #FF5C00;
  outline-offset: 3px;
  border-radius: 4px;
}

/* ============ REDUCED MOTION ============ */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .animate-marquee { animation: none; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Task 2 — SectionCounter.tsx: active accent → orange
File: `redtrace/src/app/components/SectionCounter.tsx`

Replace ALL instances of:
- `text-[#7B8FE8]` → `text-[#FF5C00]`
- `bg-[#7B8FE8]` → `bg-[#FF5C00]`

### Task 3 — page.tsx: ScrollProgress bar → orange
File: `redtrace/src/app/page.tsx`

In the `ScrollProgress` component (line ~159):
- Change `bg-[#7B8FE8]` → `bg-[#FF5C00]`

Also update the `<main>` tag (line ~473):
- Change `selection:bg-[#7B8FE8]/30` → `selection:bg-[#FF5C00]/30`

### Task 4 — TypeScript check
Run: `npx --no-install tsc --noEmit` in `redtrace/`

### Task 5 — Commit
```
git add src/app/globals.css src/app/components/SectionCounter.tsx src/app/page.tsx
git commit -m "feat(phase-3): rebrand scroll progress, section counter, globals to orange #FF5C00"
```

## Verification
- [ ] `npx tsc --noEmit` exits 0
- [ ] globals.css `::selection` background = `rgba(255, 92, 0, 0.3)`
- [ ] globals.css `:focus-visible` outline = `#FF5C00`
- [ ] globals.css scrollbar hover = `#FF5C00`
- [ ] SectionCounter active dash/text = `#FF5C00`
- [ ] ScrollProgress bar = `#FF5C00`
