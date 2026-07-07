'use client';

import { useLocale } from '@/app/context/LocaleContext';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      aria-label="Switch language"
      className="px-2 py-1 font-mono text-mono-label uppercase rounded-sm border border-border text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
