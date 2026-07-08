# portfolio — jjpg.dev

Personal portfolio of **Jose Juan Pérez González** (JJPG), Full-Stack Engineer.
A one-page editorial site (magazine "Issue" metaphor) showcasing projects,
services, skills and a contact form. Bilingual (ES/EN), light/dark themed.

Live at **[jjpg.dev](https://jjpg.dev)**.

---

## Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styles | Tailwind CSS 3 (semantic design tokens as CSS variables) |
| Theming | next-themes (light/dark) |
| Fonts | `next/font/google` — Geist (sans), Geist Mono, Instrument Serif |
| Icons | react-icons |
| Email | Resend (contact form) |
| Testing | Jest + React Testing Library |

No database. All content lives in code: copy in `src/app/i18n/dictionaries.ts`,
project data in `src/app/projects/data.ts`.

---

## Getting started

Requires Node 18+ and npm.

```bash
npm ci          # install exact dependencies
npm run dev     # start the dev server at http://localhost:3000
```

The home page is composed in `src/app/page.tsx` from the sections under
`src/app/dashboard/components/*`. See `CLAUDE.md` for the full folder map and
conventions.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed. The contact form is
the only feature that requires configuration.

| Variable | Scope | Purpose |
|---|---|---|
| `RESEND_API_KEY` | server | Resend API key. Without it, the contact form returns `503` (the rest of the site works). |
| `CONTACT_FROM_EMAIL` | server | Sender address of the contact email. Must be verified in Resend. Falls back to `onboarding@resend.dev`. |
| `CONTACT_TO_EMAIL` | server | Recipient of the contact form (where messages land). Falls back to `jose@jjpg.dev`. **No `NEXT_PUBLIC_` prefix** — it is a delivery target, never exposed to the client. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | client | Public email shown in the UI (Footer `mailto:`). Falls back to `jose@jjpg.dev`. Distinct from the form recipient above. |
| `NEXT_PUBLIC_CALENDLY_URL` | client | Calendly link used by the "discovery call" CTAs. |
| `NEXT_PUBLIC_SITE_URL` | client | Canonical site origin used for the contact API origin check. Defaults to `https://jjpg.dev`. |

Resend is instantiated **lazily inside the route handler**, so `npm run build`
does not need `RESEND_API_KEY`. If you build in an environment that validates env
presence, `RESEND_API_KEY=dummy npm run build` is enough.

---

## Testing & verification

```bash
npx tsc --noEmit                    # type-check
npm test                            # Jest suite
RESEND_API_KEY=dummy npm run build  # production build
```

> **Lint note:** `npm run lint` (`next lint`) is currently broken under Next 16
> (pinned `eslint-config-next@15` + ESLint 9 flat-config mismatch — tracked in
> issue #19). Do not run or "fix" it. Gate changes with `tsc` + `test` + `build`
> above instead.

---

## Deployment

Deployed to **[jjpg.dev](https://jjpg.dev)** via Vercel (Next.js production
build). Set the environment variables above in the Vercel project settings
(`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, and the
`NEXT_PUBLIC_*` values) so the contact form delivers in production. A push to the
default branch triggers a production deploy.

---

## Conventions

See [`CLAUDE.md`](./CLAUDE.md) — folder structure, i18n rules (every user-facing
string in both `es` and `en`), theming tokens, and the task patterns for adding a
page, component or project.
