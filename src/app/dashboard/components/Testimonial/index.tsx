'use client';

import { useLocale } from '@/app/context/LocaleContext';

// Recommendations right after the work history, read just after the
// companies where it happened. Siblings: same size and style, none featured.
export default function Testimonial() {
  const { t } = useLocale();
  const { marker, title, items, quoteOpen, quoteClose } = t.testimonial;

  return (
    <section
      aria-labelledby="testimonial-title"
      className="border-y border-border bg-bg-surface px-4 sm:px-8 lg:px-14 py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[18rem_minmax(0,1fr)] gap-x-14 gap-y-6">
        <div>
          <h2 id="testimonial-title" className="sr-only">
            {title}
          </h2>
          <span className="font-mono text-mono-label uppercase text-text-muted">
            {marker}
          </span>
        </div>

        <div className="flex flex-col gap-12">
          {items.map(({ quote, name, role, note }) => (
            <figure key={name} className="flex flex-col gap-6 max-w-3xl">
              <blockquote className="font-serif italic text-[28px] sm:text-[36px] leading-[1.15] text-text-primary text-balance">
                <span aria-hidden="true" className="text-accent">
                  {quoteOpen}
                </span>
                {quote}
                <span aria-hidden="true" className="text-accent">
                  {quoteClose}
                </span>
              </blockquote>
              <figcaption className="flex flex-col gap-1 border-l-2 border-accent pl-4">
                <span className="font-sans text-body font-medium text-text-primary">
                  {name}
                </span>
                <span className="font-sans text-small text-text-secondary">
                  {role}
                </span>
                <span className="font-mono text-mono-label uppercase text-text-muted mt-1">
                  {note}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
