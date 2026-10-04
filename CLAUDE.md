# CLAUDE.md — portfolio

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Personal portfolio website showcasing projects, skills, and contact information.

---

## Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styles | Tailwind CSS 4 (CSS-first `@theme` in `globals.css`) |
| Theming | next-themes (light/dark) |
| Icons | react-icons |
| Testing | Jest + React Testing Library |

---

## Folder Structure

```
src/app/
├── components/            # Shared UI (Navigation, Footer, ThemeSwitch, LanguageSwitcher, Logo, LiveDot, AccentWord, BackToTop, SkipLink)
├── contact/              # /contact page (FAQ → ContactForm + ContactInfo → Calendly); api/contact/route.ts (Resend)
├── context/             # LocaleContext (ES/EN; localStorage, else navigator.language) + ViewportContext
├── dashboard/components/ # Home sections: Header (hero), Experience, Testimonial, Projects, Skills. (No /dashboard route.)
├── experience/          # data.ts — companies and stack per role (≤ 6 technologies); copy in dictionaries
├── projects/            # /projects page; data.ts (single source of truth); ProjectShots (screenshot lightbox)
├── skills/              # /skills page; data.ts (levels + home preview groups)
├── i18n/                # dictionaries.ts — ALL user-facing copy (es + en, identical shape)
├── layout.tsx           # Root layout: metadata, JSON-LD, viewport theme-color, providers, skip link
├── manifest.ts          # Web app manifest
├── opengraph-image.tsx  # OG image, static at build: paper + Instrument Serif (TTF in assets/fonts, OFL)
├── page.tsx             # Home — composes dashboard/components sections
└── globals.css          # Design tokens (CSS vars) + Tailwind layers
public/cv.pdf, cv-en.pdf # Fullstack CV from ~/Documentos/CV (content.mjs); copy both again when the CV changes
```

The **home page** (`page.tsx`) and the standalone pages (`/projects`, `/skills`) share content: the home renders condensed section previews from `dashboard/components/*`, the standalone pages render the full versions. The `/services` route was removed when the site moved to job search; its copy (`servicesPage`, `dashboardServices`) stays in the dictionaries, unrendered.

Every section uses the same box: horizontal padding on the outer element (`px-4 sm:px-8 lg:px-14`) and `max-w-7xl mx-auto` inside. Navigation and footer follow it too, so the logo lines up with the content.

The experience copy comes from the CV (`~/Documentos/CV/content.mjs`, fullstack variant) and the decisions in the vault (`busqueda-empleo/revision-hitos-2026-10.md`). Change the CV first, then copy here.

---

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (type-checks; does not run lint)
npm run lint         # ESLint (flat config, ESLint 9 CLI)
npm test             # Jest tests
npm run test:watch   # Watch mode
npm run test:cov     # Coverage report
npx tsc --noEmit     # Type-check
```

> Lint runs on the ESLint 9 CLI with a flat config (`eslint.config.mjs`):
> `@next/eslint-plugin-next` (the `next/core-web-vitals` ruleset) +
> `typescript-eslint`. `next lint` was removed in Next 16 and is gone, along with
> the duplicate `standard` config and the orphan `.prettierrc`. Gate changes with
> `npm run lint` + `npx tsc --noEmit` + `npm run build`. Hold ESLint at 9 (do not
> bump to 10) and TypeScript at 5.

The contact API build gotcha is fixed: `src/app/api/contact/route.ts` instantiates
Resend **lazily inside `POST()`** (never at module load), so `npm run build`
succeeds without `RESEND_API_KEY`. Keep it that way.

---

## Related projects

Standalone — no cross-repo dependencies.

## Task patterns

### Add a page
1. New folder under `src/app/<route>/` with `page.tsx`
2. Server Component by default; `'use client'` only for interactivity
3. Add nav entry where the site's main nav lives (check `src/app/components/`)
4. Verify: `npx tsc --noEmit && npm test && npm run build`

### Add a shared component
1. New file under `src/app/components/<Name>/index.tsx`
2. Theming via `next-themes` — read `useTheme()` only in client components
3. Icons from `react-icons` (no custom SVG unless strictly needed)
4. All user-facing text via `useLocale()` (see i18n below) — no hardcoded strings
5. Test colocated (`index.test.tsx`)

### i18n (ES/EN)
- Every user-facing string — including aria-labels and decorative mono markers
  (`// página · x`) — lives in `src/app/i18n/dictionaries.ts` under both `es` and
  `en` (identical shape). Read it with `const { t } = useLocale()`.
- Locale is client state, persisted to `localStorage`, and synced to `<html lang>`
  by `LocaleContext`. Default is `es`; keep `es` values in sync with any test that
  queries by Spanish text.

### Add / edit a project
1. Structural data → `src/app/projects/data.ts` (`PROJECTS[]`): id, title,
   technologies, role, imageCover, links, `status`
   (`beta`/`live-demo`/`in-dev`/`production`), optional `screenshots`. Home shows
   the subset in `FEATURED_IDS`, which must also lead `PROJECTS` in the same
   order so a project keeps its number on both pages (a test enforces it), and
   only projects with a public demo (another test).
2. Copy → `dictionaries.projectCopy.<id>` (`home` / `full` / `outcome`) in **both**
   `es` and `en`. Never key project copy by array index.
3. Cover art → `public/img/<pN>.svg`, 600×450, dark editorial system (gradient
   `#0E1014→#15171C`, hairlines at y=56/394, serif italic title and a 16 px
   mono subtitle). No number, status, stack or year on the art: the card
   already shows them, and below ~10 px they read as broken content.
   Screenshots → `public/img/shots/<id>-N.webp`.

### Tweak theming (paper-first · serif accent · single accent #FF5C2E)
1. Tokens are CSS variables in `globals.css` (`:root` = light, `.dark` = dark),
   surfaced as Tailwind utilities through the CSS-first `@theme` block (Tailwind 4
   has no `tailwind.config.js`). Components use **semantic** classes
   (`bg-bg-base`, `text-text-primary`, `border-border`, `text-accent`) that switch
   with the theme automatically — **avoid `dark:` variants and off-palette colors**.
   `text-accent` maps to `--accent-ink` (AA-safe on light) via the `--text-color-*`
   theme namespace, while `bg-accent`/`border-accent` keep the vivid `--accent` fill.
   Theme-aware shadows use raw `--elevation-*` tokens referenced from `@theme` so the
   `.dark` override applies (a literal in `@theme` would be inlined and lock the value).
2. One accent only (`#FF5C2E` / `text-accent`). Display headings use `font-serif`
   (Instrument Serif); the italic accent word uses `AccentWord`.
3. Verify **both** modes and **both** locales in the browser before merging.
