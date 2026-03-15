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
| Styles | Tailwind CSS 3 |
| Theming | next-themes (light/dark) |
| Icons | react-icons |
| Testing | Jest + React Testing Library |

---

## Folder Structure

```
src/app/
├── components/     # Shared components
├── contact/        # Contact page
├── context/        # React contexts
├── dashboard/      # Dashboard page
├── projects/       # Projects page
├── skills/         # Skills page
├── layout.tsx      # Root layout
├── page.tsx        # Home page
└── globals.css     # Global styles
```

---

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm test             # Jest tests
npm run test:watch   # Watch mode
npm run test:cov     # Coverage report
npx tsc --noEmit     # Type-check
```
