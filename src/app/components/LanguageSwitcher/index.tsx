'use client';

import { useLocale } from '@/app/context/LocaleContext';

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      aria-label={t.a11y.switchLanguage}
      className="max-lg:min-h-12 max-lg:min-w-12 px-2 py-1 font-mono text-mono-label uppercase rounded-sm border border-border text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
