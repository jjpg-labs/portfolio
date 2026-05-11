'use client';

import { ChildrenProps } from '@/app/types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: ChildrenProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
