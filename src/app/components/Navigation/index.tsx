'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Logo } from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';
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

  const toggleMenu = () => setIsOpen((v) => !v);

  useEffect(() => {
    if (isDesktop && isOpen) setIsOpen(false);
  }, [isDesktop, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen && !isDesktop ? 'hidden' : 'auto';
  }, [isOpen, isDesktop]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
      <Link
        href="/"
        className="flex items-center gap-3 z-20 group"
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

      <div className="flex items-center gap-3 lg:hidden z-20">
        <LanguageSwitcher />
        <button
          onClick={toggleMenu}
          className="text-text-secondary hover:text-text-primary p-2 rounded-sm transition"
          aria-label="Toggle Navigation"
        >
          {isOpen ? IoClose({ size: 28 }) : IoMenu({ size: 28 })}
        </button>
      </div>

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
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          );
        })}
        <LanguageSwitcher />
      </div>

      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-bg-base/95 backdrop-blur-sm
          flex flex-col items-center justify-center space-y-8
          transition-transform duration-300 ease-in-out z-10
          ${
            isOpen && !isDesktop
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0 pointer-events-none'
          }
          lg:hidden
        `}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className={`font-serif text-3xl py-4 transition-colors ${
                active ? 'italic text-accent' : 'text-text-primary'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
