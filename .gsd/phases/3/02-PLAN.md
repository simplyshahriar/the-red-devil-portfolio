# Phase 3 — Plan 3.2: Cyberpunk Orange — page.tsx full rebrand

## Goal
Replace all Periwinkle (#7B8FE8, #98A7ED, #BFC6F4) accent colors with Cyberpunk Orange
(#FF5C00, #FF7A2E, #FF9E66) throughout page.tsx — About, Expertise, Projects, Experience,
Contact, Footer, Marquee, PhotoReveal sections. Also fix "SIGN IN" → "CONTACT" in CyberHero.

## Wave: 2 (after Plan 3.1)

## Color Mapping
| Old | New | Usage |
|-----|-----|-------|
| `#7B8FE8` | `#FF5C00` | Primary accent (skill bars, project numbers, icons, buttons) |
| `#98A7ED` | `#FF7A2E` | Secondary accent (category labels, links, sub-accents) |
| `#BFC6F4` | `#FF9E66` | Soft accent (rarely used) |
| `bg-[#0A0C10]` | `bg-[#09090B]` | Main background |
| `bg-[#12151A]` | `bg-[#18181B]` | Card background |
| `bg-[#1A1E24]` | `bg-[#27272A]` | Hover card background |

## Tasks

### Task 1 — page.tsx: ALL color replacements
File: `redtrace/src/app/page.tsx`

**Find → Replace (do ALL of these):**

1. `bg-[#7B8FE8]/[0.07]` → `bg-[#FF5C00]/[0.07]` (PhotoReveal glow blob)
2. `bg-[#7B8FE8]` → `bg-[#FF5C00]` (all bg uses — skill bars, footer icon, submit button)
3. `text-[#7B8FE8]` → `text-[#FF5C00]` (all text uses — quote marks, section numbers, etc.)
4. `border-[#7B8FE8]` → `border-[#FF5C00]` (all border uses — focus rings, hover)
5. `ring-[#7B8FE8]` → `ring-[#FF5C00]` (focus rings on submit button)
6. `shadow-[#7B8FE8]` → `shadow-[#FF5C00]` (button shadow)
7. `text-[#98A7ED]` → `text-[#FF7A2E]` (category labels, cert issuer, links)
8. `hover:border-[#7B8FE8]` → `hover:border-[#FF5C00]` (card hover borders)
9. `group-hover:text-[#98A7ED]` → `group-hover:text-[#FF7A2E]` (hover text)
10. `bg-[#7B8FE8]/[0.08]` → `bg-[#FF5C00]/[0.08]` (photo glow)
11. `bg-[#7B8FE8]/[0.06]` → `bg-[#FF5C00]/[0.06]` (card glow)
12. `border-[#7B8FE8]/25` → `border-[#FF5C00]/25` (dashed ring)
13. `border-[#7B8FE8]/15` → `border-[#FF5C00]/15` (solid ring)
14. `border-[#7B8FE8]/70` → `border-[#FF5C00]/70` (mac dot)
15. `bg-[#7B8FE8]/70` → `bg-[#FF5C00]/70` (mac dot fill)
16. `mix-blend-color opacity-[0.22]` on the photo overlay — change `bg-[#7B8FE8]` → `bg-[#FF5C00]`
17. `bg-[#0A0C10]` → `bg-[#09090B]` (all background instances in page.tsx)
18. `bg-[#12151A]` → `bg-[#18181B]` (all card backgrounds)
19. `bg-[#1A1E24]` → `bg-[#27272A]` (all hover card backgrounds)
20. Marquee diamond: `text-[#7B8FE8]` → `text-[#FF5C00]`
21. Contact form inputs focus: `focus:border-[#7B8FE8]` → `focus:border-[#FF5C00]`
22. Contact form inputs focus ring: `focus:ring-[#7B8FE8]/10` → `focus:ring-[#FF5C00]/10`
23. Submit button: `bg-[#7B8FE8]` → `bg-[#FF5C00]`, `hover:bg-[#98A7ED]` → `hover:bg-[#FF7A2E]`, `text-[#0A0C10]` → `text-black`
24. Experience card hover: `hover:border-[#7B8FE8]/35` → `hover:border-[#FF5C00]/35`
25. Experience bullet dot: `bg-[#7B8FE8]` → `bg-[#FF5C00]`
26. Contact social links hover: `hover:border-[#7B8FE8]/40` → `hover:border-[#FF5C00]/40`
27. Contact social arrow hover: `group-hover:text-[#98A7ED]` → `group-hover:text-[#FF7A2E]`
28. Footer logo badge: `bg-[#7B8FE8]` → `bg-[#FF5C00]`
29. Expertise card category label: `text-[#7B8FE8]` → `text-[#FF5C00]`
30. Expertise card arrow hover: `group-hover:border-[#7B8FE8]/50` → `group-hover:border-[#FF5C00]/50`, `group-hover:text-[#98A7ED]` → `group-hover:text-[#FF7A2E]`
31. Mobile project card number: `text-[#7B8FE8]` → `text-[#FF5C00]`
32. Mobile project "View details" link: `text-[#98A7ED]` → `text-[#FF7A2E]`

### Task 2 — CyberHero.tsx: Fix "SIGN IN" → "CONTACT" button
File: `redtrace/src/app/components/CyberHero.tsx`

Find the top-bar "SIGN IN" button and:
- Change text from `SIGN IN` to `CONTACT`
- Add `onClick` handler to scroll to `#contact`: 
  ```tsx
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  ```
- Or change it to an `<a href="#contact">` anchor tag

### Task 3 — TypeScript + Lint check
Run in `redtrace/`:
1. `npx --no-install tsc --noEmit`
2. `npm run lint`

### Task 4 — Commit
```
git add src/app/page.tsx src/app/components/CyberHero.tsx
git commit -m "feat(phase-3): rebrand page.tsx to cyberpunk orange, fix SIGN IN → CONTACT"
```

## Verification
- [ ] `npm run lint` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] No `#7B8FE8` or `#98A7ED` left in page.tsx (grep check)
- [ ] "SIGN IN" button text changed to "CONTACT" in CyberHero.tsx
- [ ] Submit button is `bg-[#FF5C00]`
- [ ] Skill bars are `bg-[#FF5C00]`
