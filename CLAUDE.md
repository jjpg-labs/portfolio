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
├── components/            # Shared UI (Navigation, Footer, ThemeSwitch, LanguageSwitcher, Logo, LiveDot, AccentWord, BackToTop)
├── contact/              # /contact page + ContactForm; api/contact/route.ts (Resend)
├── context/             # LocaleContext (ES/EN, localStorage-persisted) + ViewportContext
├── dashboard/components/ # Home one-page sections: Header (hero), Services, Projects, Skills. (No /dashboard route.)
├── projects/            # /projects page; data.ts (single source of truth); ProjectShots (screenshot lightbox)
├── services/            # /services page
├── skills/              # /skills page
├── i18n/                # dictionaries.ts — ALL user-facing copy (es + en, identical shape)
├── layout.tsx           # Root layout: metadata, JSON-LD, viewport theme-color, providers
├── manifest.ts          # Web app manifest
├── opengraph-image.tsx  # Branded OG image (dark editorial, single accent)
├── page.tsx             # Home — composes dashboard/components sections
└── globals.css          # Design tokens (CSS vars) + Tailwind layers
```

The **home page** (`page.tsx`) and the standalone pages (`/projects`, `/services`, `/skills`) share content: the home renders condensed section previews from `dashboard/components/*`, the standalone pages render the full versions.

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
   the subset in `FEATURED_IDS`.
2. Copy → `dictionaries.projectCopy.<id>` (`home` / `full` / `outcome`) in **both**
   `es` and `en`. Never key project copy by array index.
3. Cover art → `public/img/<pN>.svg`, 600×450, dark editorial system (gradient
   `#0E1014→#15171C`, hairlines at y=56/394, mono `// pN · slug`, accent status
   word, serif italic title). Screenshots → `public/img/shots/<id>-N.webp`.

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
