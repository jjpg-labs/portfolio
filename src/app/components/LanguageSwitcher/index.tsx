'use client';

import { useLocale } from '@/app/context/LocaleContext';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      aria-label="Switch language"
      className="px-2 py-1 text-sm font-semibold rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
