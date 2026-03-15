'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';
import { ThemeSwitcher } from '../ThemeSwitch';
import { LanguageSwitcher } from '../LanguageSwitcher';
import Image from 'next/image';
import { useViewport } from '@/app/context/ViewportContext';
import { useLocale } from '@/app/context/LocaleContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDesktop } = useViewport();
  const { t } = useLocale();

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isDesktop && isOpen) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    document.body.style.overflow = isOpen && !isDesktop ? 'hidden' : 'auto';
  }, [isOpen, isDesktop]);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
      <Link
        href="/"
        className="flex items-center text-2xl font-extrabold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition z-20"
      >
        <Image
          src="/terminalIcon.png"
          alt="Terminal Icon"
          width={28}
          height={28}
          className="mr-2"
        />
        JJPG
      </Link>

      <div className="flex items-center space-x-2 lg:hidden z-20">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <button
          onClick={toggleMenu}
          className="text-gray-700 dark:text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          aria-label="Toggle Navigation"
        >
          {isOpen ? IoClose({ size: 28 }) : IoMenu({ size: 28 })}
        </button>
      </div>

      <div className="hidden lg:flex space-x-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl
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
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={toggleMenu}
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition w-full text-center py-4"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
