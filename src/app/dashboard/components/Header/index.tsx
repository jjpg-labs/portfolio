'use client';

import Link from 'next/link';
import { CALENDLY_URL } from '@/app/components/Footer';
import { LiveDot } from '@/app/components/LiveDot';
import { AccentWord } from '@/app/components/AccentWord';
import { useLocale } from '@/app/context/LocaleContext';

// The fullstack CV generated from ~/Documentos/CV/content.mjs, one PDF per
// locale. Regenerate and copy both when the CV changes.
const CV_HREF = { es: '/cv.pdf', en: '/cv-en.pdf' } as const;

export default function Header() {
  const { t, locale } = useLocale();
  const c = t.colophon;

  const colophon = [
    { term: c.role, value: t.hero.role },
    { term: c.status, value: c.available, accent: true },
    { term: c.base, value: 'Almedina, ES' },
    { term: c.mode, value: c.modeValue },
    { term: c.experience, value: c.experienceValue },
    { term: c.stack, value: 'PHP · Node · React' },
    { term: c.languages, value: c.languagesValue },
  ];

  return (
    <section className="relative px-4 sm:px-8 lg:px-14 py-10 lg:py-16 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 font-mono text-mono-label uppercase text-text-muted">
          <span>{t.ui.metaHome}</span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t.ui.heroLive}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-6">
            <LiveDot label={t.hero.availability} />

            <h1 className="font-serif text-[36px] sm:text-[52px] lg:text-[80px] leading-[1.02] text-balance">
              {t.hero.greeting} José Juan.{' '}
              <AccentWord underline>{t.hero.role}</AccentWord>.
            </h1>

            {/* The CV's headline stack, visible without reading a paragraph. */}
            <p className="font-mono text-small uppercase tracking-mono text-text-primary">
              PHP/Symfony · Node.js · React/Next.js
            </p>

            <h2 className="font-serif text-[20px] sm:text-h2 lg:text-[34px] text-text-secondary max-w-[40ch] leading-tight">
              {t.hero.tagline}
            </h2>

            {/* CTAs before the paragraph so they land in the first mobile
                screen: the CV first, then contact, then the projects. */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-end gap-x-8 gap-y-1">
                <a
                  href={CV_HREF[locale]}
                  download={`CV-Jose-Juan-Perez-Gonzalez-${locale}.pdf`}
                  className="inline-flex items-end min-h-12 font-serif italic text-[22px] border-b-2 border-accent pb-1 text-text-primary hover:text-accent transition w-fit"
                >
                  {t.hero.btnCV}
                  <span className="font-mono text-accent ml-2">↓</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-end min-h-12 font-sans text-body text-text-primary border-b border-text-muted pb-1 w-fit hover:text-accent transition"
                >
                  {t.hero.btnContact}
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-end min-h-12 font-sans text-body text-text-secondary border-b border-text-muted pb-1 w-fit hover:text-text-primary transition"
                >
                  {t.hero.btnProjects}
                </Link>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-12 w-fit font-mono text-mono-label uppercase text-text-secondary hover:text-accent transition"
              >
                {t.hero.calendlyHint} →
              </a>
            </div>

            <p className="font-sans text-body-lg text-text-secondary max-w-[62ch]">
              {t.hero.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border-subtle border-y border-border-subtle">
              {t.hero.figures.map(({ value, label }) => (
                <li key={value} className="flex flex-col gap-1 bg-bg-base py-4 sm:px-5 sm:first:pl-0">
                  <span className="font-serif text-[32px] leading-none text-accent">
                    {value}
                  </span>
                  <span className="font-sans text-small text-text-secondary">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="border-y border-border py-3 self-start w-full lg:max-w-[260px] lg:sticky lg:top-24">
            <dl className="flex flex-col">
              {colophon.map(({ term, value, accent }) => (
                <div
                  key={term}
                  className="flex justify-between items-baseline gap-4 font-mono text-mono-label uppercase py-1.5 border-b border-border-subtle last:border-b-0"
                >
                  <dt className="shrink-0 text-text-muted">{term}</dt>
                  <dd
                    className={`text-right ${accent ? 'text-accent' : 'text-text-primary'}`}
                  >
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
