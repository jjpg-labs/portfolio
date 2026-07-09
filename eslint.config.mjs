import next from '@next/eslint-plugin-next'
import tseslint from 'typescript-eslint'

// Flat config for ESLint 9. Replaces the removed `next lint` (Next 16) and the
// old `.eslintrc.json`. Two linters only: @next/eslint-plugin-next (the
// next/core-web-vitals ruleset) + typescript-eslint. The duplicate `standard`
// config and the orphan `.prettierrc` were dropped in this migration.
export default tseslint.config(
  {
    // Build output, generated types and coverage are never linted.
    ignores: ['.next/**', 'coverage/**', 'next-env.d.ts'],
  },
  // Next.js core-web-vitals rules (native flat preset, self-registers @next/next).
  next.configs['core-web-vitals'],
  // TypeScript recommended, scoped to source files.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tseslint.configs.recommended],
  },
  // Tests legitimately use `any` for mocks, empty prop interfaces for component
  // stubs and short-circuit guard expressions — relax the strict TS rules there.
  {
    files: ['**/*.test.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
)
