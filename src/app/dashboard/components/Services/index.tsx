'use client';

import Link from 'next/link';
import { useLocale } from '@/app/context/LocaleContext';

export default function Services() {
  const { t } = useLocale();
  const { title, subtitle, seeAll } = t.dashboardServices;
  const packages = t.servicesPage.packages;

  return (
    <section className="border-y border-border bg-bg-surface px-4 sm:px-8 lg:px-14 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <h2 className="font-serif text-[28px] sm:text-[40px] lg:text-[48px] leading-tight text-text-primary">
              {title}
            </h2>
            <p className="font-sans text-body text-text-secondary max-w-[60ch] mt-2">
              {subtitle}
            </p>
          </div>
          <span className="font-mono text-mono-label uppercase text-text-muted">
            // 04 — índice
          </span>
        </div>

        <ul className="border-t border-border">
          {packages.map((pkg, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            const badge =
              'badge' in pkg ? (pkg as { badge?: string }).badge : undefined;
            return (
              <li key={pkg.id} className="border-b border-border-subtle">
                <Link
                  href="/services"
                  className="group grid grid-cols-[40px_1fr_24px] sm:grid-cols-[56px_1fr_140px_24px] lg:grid-cols-[64px_1fr_200px_180px_32px] gap-4 sm:gap-6 px-2 sm:px-6 lg:px-8 py-6 lg:py-7 hover:bg-bg-base transition-colors items-center"
                >
                  <span className="font-mono text-small tracking-mono-wide text-text-muted">
                    {num}
                  </span>

                  <div className="flex flex-col gap-1.5 min-w-0">
                    {badge && (
                      <span className="flex items-center gap-1.5 font-mono text-mono-label uppercase text-accent">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {badge}
                      </span>
                    )}
                    <span className="font-serif text-[24px] sm:text-[28px] lg:text-[30px] leading-tight text-text-primary truncate">
                      {pkg.title}
                    </span>
                    <span className="hidden sm:block font-sans text-small text-text-secondary truncate lg:hidden">
                      {pkg.summary}
                    </span>
                  </div>

                  <span className="hidden sm:block lg:hidden font-mono text-mono-label uppercase text-text-muted text-right">
                    {pkg.formatValue}
                  </span>

                  <span className="hidden lg:block font-sans text-small text-text-secondary">
                    {pkg.summary}
                  </span>

                  <span className="hidden lg:block font-mono text-mono-label uppercase text-text-muted text-right">
                    {pkg.formatValue}
                  </span>

                  <span
                    aria-hidden="true"
                    className="font-mono text-h3 text-accent text-right transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-end">
          <Link
            href="/services"
            className="font-serif italic text-[20px] border-b-2 border-accent pb-1 text-text-primary hover:text-accent transition"
          >
            {seeAll}
            <span className="font-mono text-accent ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
