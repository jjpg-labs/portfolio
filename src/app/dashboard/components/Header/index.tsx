'use client';

import Link from 'next/link';
import { CALENDLY_URL } from '@/app/components/Footer';
import { useLocale } from '@/app/context/LocaleContext';

const TECH_CHIPS = ['NestJS', 'Next.js', 'Symfony', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'];

export default function Header() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 shadow-xl transition-colors overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {t.hero.availability}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-gray-50">
          {t.hero.greeting}{' '}
          <span className="text-blue-700 dark:text-blue-400">Jose Juan</span>{' '}
          — {t.hero.role}
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {t.hero.tagline}
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {TECH_CHIPS.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
          <Link
            href="/projects"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            {t.hero.btnProjects}
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 text-gray-800 py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition border border-gray-300 dark:border-gray-600 w-full sm:w-auto"
          >
            {t.hero.btnContact}
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {t.hero.calendlyHint}
          </a>
        </p>
      </div>
    </section>
  );
}
