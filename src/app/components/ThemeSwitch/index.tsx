'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useLocale } from '@/app/context/LocaleContext';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? 'light' : theme;
  const isDark = currentTheme === 'dark';
  const label = isDark ? t.a11y.toLight : t.a11y.toDark;

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-full text-text-secondary hover:text-accent transition-colors"
      title={label}
      aria-label={label}
    >
      {isDark ? (
        <IoSunnyOutline size={20} aria-hidden />
      ) : (
        <IoMoonOutline size={20} aria-hidden />
      )}
    </button>
  );
}
