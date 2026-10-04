'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Locale, dictionaries } from '@/app/i18n/dictionaries';

const STORAGE_KEY = 'locale';

interface LocaleContextValue {
  locale: Locale;
  t: (typeof dictionaries)['es'];
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Server + first client render use 'es' to match <html lang="es"> and avoid
  // a hydration mismatch; the persisted value is applied on mount below.
  const [locale, setLocaleState] = useState<Locale>('es');

  // A saved choice wins; without one, an English browser gets the English
  // site (recruiters outside Spain). Anything else stays in Spanish.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') {
      setLocaleState(stored);
      return;
    }
    if (window.navigator.language?.toLowerCase().startsWith('en')) {
      setLocaleState('en');
    }
  }, []);

  // Keep <html lang> in sync with the active locale (a11y + SEO).
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable (private mode); locale still updates */
    }
  }, []);

  return (
    <LocaleContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider');
  return ctx;
}
