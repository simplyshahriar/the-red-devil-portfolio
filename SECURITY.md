# Security Policy — Hasnain Shahriar Portfolio

## Project Scope

This is a **personal cybersecurity portfolio** website built with Next.js and deployed via Vercel.

The project scope is limited to:

- The Next.js application source code in this repository
- The `/api/contact` server-side endpoint
- The certificate gallery and static assets served from `/public`

Out of scope:
- Third-party services (Vercel, Upstash, Resend, GitHub) — report issues to their respective security teams
- Other personal projects or external platforms referenced in the portfolio content

---

## Reporting a Security Issue

If you discover a potential security vulnerability in this portfolio application:

**Contact:** hasnainshahriar2007@gmail.com

**Subject line:** `[SECURITY] Portfolio – Brief description`

Please include:
- A clear description of the potential issue
- Steps to reproduce or demonstrate the problem
- The impact or potential severity (in your assessment)
- Any suggested remediation, if known

---

## Responsible Disclosure Expectations

- Please allow reasonable time for assessment and remediation before any public disclosure.
- Do not test attack techniques against the live production deployment or its infrastructure.
- Do not access, modify, or exfiltrate user data, server configuration, or private credentials.
- Do not perform denial-of-service testing.

---

## Security Measures Currently in Place

| Control | Implementation |
|---|---|
| Dependency management | `npm audit fix` applied; zero known vulnerabilities |
| Dependency versions | Next.js upgraded to latest security patch (16.4.6) |
| Security headers | CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| Rate limiting | Upstash sliding-window (5 requests / 60 seconds per IP) on `/api/contact` |
| Spam protection | Honeypot field in the contact form |
| Input validation | Server-side length, format, and type checks on all contact form fields |
| Secrets management | All API keys stored as Vercel environment variables; never committed |
| Environment files | `.env*` excluded via `.gitignore` |
| External links | `target="_blank"` links include `rel="noopener noreferrer"` |

---

## Important Disclaimer

This portfolio is an **educational and research documentation** website. No warranty of security is offered or implied. The site demonstrates cybersecurity practice areas; it does not constitute a commercial security product or service.

---

*Last reviewed: November 2026*
