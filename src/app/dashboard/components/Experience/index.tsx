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
                className="border-b border-border-subtle py-8 lg:py-10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-mono-label uppercase text-text-muted">
                      {numLabel}
                    </span>
                    <h3 className="font-serif text-[24px] sm:text-[28px] text-text-primary">
                      {entry.company}
                    </h3>
                  </div>
                  <span className="font-mono text-mono-label uppercase text-text-muted">
                    {copy.role} · {copy.dates}
                  </span>
                </div>

                <ul className="flex flex-col gap-2 mb-5 max-w-[70ch]">
                  {copy.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-sans text-small text-text-secondary leading-relaxed flex items-baseline gap-2"
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
                      className="font-mono text-mono-label uppercase text-text-muted px-2 py-0.5 border border-border-subtle rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
