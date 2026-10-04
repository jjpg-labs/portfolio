'use client';

import { useLocale } from '@/app/context/LocaleContext';
import { EXPERIENCE } from '@/app/experience/data';

export default function Experience() {
  const { t } = useLocale();
  const { title, subtitle, entries } = t.experience;

  return (
    <section className="px-4 sm:px-8 lg:px-14 py-16 lg:py-20 bg-bg-base">
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
            {t.ui.homeSecExperience}
          </span>
        </div>

        <div className="border-t border-border">
          {EXPERIENCE.map((entry, idx) => {
            const numLabel = String(idx + 1).padStart(2, '0');
            const copy = entries[entry.id];
            if (!copy) return null;

            return (
              <article
                key={entry.id}
                className="grid grid-cols-1 lg:grid-cols-[18rem_minmax(0,1fr)] gap-x-14 gap-y-4 border-b border-border-subtle last:border-b-0 py-8 lg:py-10 last:pb-0"
              >
                {/* Who, what and when together on the left, so a recruiter
                    reads company, role and dates in one glance. */}
                <header className="flex flex-col gap-1.5 lg:sticky lg:top-24 lg:self-start">
                  <span className="font-mono text-mono-label uppercase text-text-muted">
                    {numLabel}
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] leading-tight text-text-primary">
                    {entry.company}
                  </h3>
                  <p className="font-sans text-body font-medium text-text-primary">
                    {copy.role}
                  </p>
                  <p className="font-mono text-mono-label uppercase text-text-muted whitespace-nowrap">
                    {copy.dates}
                  </p>
                </header>

                <div>
                  <ul className="flex flex-col gap-2.5 mb-5 max-w-[68ch]">
                    {copy.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="font-sans text-body text-text-secondary flex items-baseline gap-2"
                      >
                        <span aria-hidden="true" className="text-accent">
                          ·
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {entry.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-mono-chip uppercase text-text-muted px-2 py-1 border border-border-subtle rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
