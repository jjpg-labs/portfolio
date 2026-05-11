'use client';

import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import { CALENDLY_URL } from '@/app/components/Footer';
import { useLocale } from '@/app/context/LocaleContext';

export default function ServicesClient() {
  const { t } = useLocale();
  const { title, subtitle, ctaText, ctaFootnote, includesLabel, packages } =
    t.servicesPage;

  return (
    <section className="px-4 sm:px-8 lg:px-14 py-12 lg:py-16 bg-bg-base min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 font-mono text-mono-label uppercase text-text-muted">
          <span>// página · servicios</span>
          <span>Issue <span className="text-accent">02</span></span>
        </div>

        <header className="mb-14">
          <h1 className="font-serif text-display lg:text-[80px] leading-none text-text-primary">
            {title}
          </h1>
          <p className="font-sans text-body-lg text-text-secondary mt-4 max-w-[58ch]">
            {subtitle}
          </p>
        </header>

        <div className="flex flex-col">
          {packages.map((pkg, idx) => {
            const badge =
              'badge' in pkg ? (pkg as { badge?: string }).badge : undefined;
            return (
              <ServiceCard
                key={pkg.id}
                num={idx + 1}
                title={pkg.title}
                description={pkg.description}
                bullets={pkg.bullets}
                formatLabel={pkg.formatLabel}
                formatValue={pkg.formatValue}
                includesLabel={includesLabel}
                ctaText={ctaText}
                badge={badge}
              />
            );
          })}
        </div>

        <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-sans text-body text-text-secondary max-w-[40ch]">
            {ctaFootnote}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif italic text-[22px] border-b-2 border-accent pb-1 text-text-primary hover:text-accent transition w-fit"
          >
            {ctaText}
            <span className="font-mono text-accent ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
