'use client';

import { useLocale } from '@/app/context/LocaleContext';

// First focusable element on every page: jumps past the navigation to
// <main id="main">. Hidden until it receives keyboard focus.
export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:inline-flex focus:items-center focus:min-h-12 focus:px-4 focus:rounded-sm focus:bg-accent focus:text-ink focus:font-sans focus:text-body"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
