'use client';

import Link from 'next/link';
import { CALENDLY_URL } from '@/app/components/Footer';
import { LiveDot } from '@/app/components/LiveDot';
import { AccentWord } from '@/app/components/AccentWord';
import { useLocale } from '@/app/context/LocaleContext';

const COLOPHON_KEYS = [
  { term: 'Issue', value: 'N.º 02', accent: true },
  { term: 'Año', value: '2026' },
  { term: 'Editor', value: 'JJPG' },
  { term: 'Rol', value: 'FS Engineer' },
  { term: 'Base', value: 'Madrid, ES' },
  { term: 'Estado', value: 'Disponible', accent: true },
  { term: 'Respuesta', value: '< 24h' },
  { term: 'Stack', value: 'TS · Next · PG' },
];

export default function Header() {
  const { t } = useLocale();

  return (
    <section className="relative px-4 sm:px-8 lg:px-14 py-10 lg:py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 font-mono text-mono-label uppercase text-text-muted">
          <span>// portada · home</span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            En vivo desde Madrid · ES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-6">
            <LiveDot label={t.hero.availability} />

            <h1 className="font-serif text-[56px] sm:text-display lg:text-display-xl">
              {t.hero.greeting} Jose Juan.{' '}
              <AccentWord>{t.hero.role}</AccentWord>.
            </h1>

            <h2 className="font-serif text-h2 lg:text-[34px] text-text-secondary max-w-[40ch] leading-tight">
              {t.hero.tagline}
            </h2>

            <p className="font-sans text-body-lg text-text-secondary max-w-[60ch]">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-4">
              <Link
                href="/projects"
                className="font-serif italic text-[22px] border-b-2 border-accent pb-1 text-text-primary hover:text-accent transition w-fit"
              >
                {t.hero.btnProjects}
                <span className="font-mono text-accent ml-2">→</span>
              </Link>
              <Link
                href="/contact"
                className="font-sans text-small text-text-secondary border-b border-text-muted pb-1 w-fit hover:text-text-primary transition"
              >
                {t.hero.btnContact}
              </Link>
            </div>

            <p className="font-mono text-mono-label uppercase text-text-muted mt-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                {t.hero.calendlyHint} →
              </a>
            </p>
          </div>

          <aside className="border-y border-border py-3 self-start w-full max-w-[260px] lg:sticky lg:top-24">
            <dl className="flex flex-col">
              {COLOPHON_KEYS.map(({ term, value, accent }) => (
                <div
                  key={term}
                  className="flex justify-between items-baseline font-mono text-mono-label uppercase py-1.5 border-b border-border-subtle last:border-b-0"
                >
                  <dt className="text-text-muted">{term}</dt>
                  <dd className={accent ? 'text-accent' : 'text-text-primary'}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
