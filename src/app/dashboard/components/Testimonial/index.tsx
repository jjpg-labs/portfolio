'use client';

import { useLocale } from '@/app/context/LocaleContext';

// One quote right after the work history: the person who hired José Juan
// twice, read just after the two companies where it happened.
export default function Testimonial() {
  const { t } = useLocale();
  const { marker, title, quote, quoteOpen, quoteClose, name, role, note } =
    t.testimonial;

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

        <figure className="flex flex-col gap-6 max-w-[40ch]">
          <blockquote className="font-serif italic text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] text-text-primary text-balance">
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
      </div>
    </section>
  );
}
