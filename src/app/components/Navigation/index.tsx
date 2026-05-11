'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Logo } from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { ThemeSwitcher } from '../ThemeSwitch';
import { useViewport } from '@/app/context/ViewportContext';
import { useLocale } from '@/app/context/LocaleContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useViewport();
  const { t } = useLocale();
  const pathname = usePathname();

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isDesktop && isOpen) setIsOpen(false);
  }, [isDesktop, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen && !isDesktop ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, isDesktop]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="flex items-center gap-3 group"
        aria-label="jjpg.dev — Inicio"
      >
        <Logo size="sm" />
        <span className="hidden sm:flex flex-col leading-tight">
          <span className="font-mono text-mono-label uppercase text-text-muted">
            Issue <span className="text-accent">02</span> · jjpg.dev · 2026
          </span>
          <span className="font-serif text-[17px] text-text-primary group-hover:italic transition-all">
            Jose Juan Pérez
          </span>
        </span>
      </Link>

      {/* Mobile: controles derecha */}
      <div className="flex items-center gap-1 lg:hidden">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <button
          onClick={() => setIsOpen(true)}
          className="text-text-secondary hover:text-text-primary p-2 rounded-sm transition"
          aria-label="Abrir menú"
        >
          {IoMenu({ size: 26 })}
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex space-x-7 items-center">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`font-serif text-[18px] pb-0.5 transition-colors ${
                active
                  ? 'text-text-primary italic border-b border-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      {/* Backdrop */}
      {isOpen && !isDesktop && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer lateral */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`
          fixed top-0 right-0 h-screen w-72 bg-bg-surface border-l border-border
          flex flex-col transition-transform duration-300 ease-in-out z-50
          ${isOpen && !isDesktop ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden
        `}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
          <span className="font-mono text-mono-label uppercase text-text-muted">
            // menú
          </span>
          <button
            onClick={closeMenu}
            className="text-text-secondary hover:text-text-primary p-1.5 rounded-sm transition"
            aria-label="Cerrar menú"
          >
            {IoClose({ size: 22 })}
          </button>
        </div>

        <div className="flex flex-col px-6 py-6 flex-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`font-serif text-[24px] py-3 border-b border-border-subtle last:border-b-0 transition-colors ${
                  active ? 'italic text-accent' : 'text-text-primary hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="px-6 py-4 border-t border-border-subtle flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
