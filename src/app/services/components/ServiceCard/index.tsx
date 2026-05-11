'use client';

import Link from 'next/link';

interface ServiceCardProps {
  num: number;
  title: string;
  description: string;
  bullets: string[];
  formatLabel: string;
  formatValue: string;
  includesLabel: string;
  ctaText: string;
  badge?: string;
}

export default function ServiceCard({
  num,
  title,
  description,
  bullets,
  formatLabel,
  formatValue,
  includesLabel,
  ctaText,
  badge,
}: ServiceCardProps) {
  const numLabel = String(num).padStart(2, '0');
  const featured = Boolean(badge);

  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-[64px_1fr_200px] gap-6 lg:gap-10 py-10 lg:py-14 border-t ${
        featured ? 'border-accent' : 'border-border'
      }`}
    >
      <div>
        <span className="font-mono text-small tracking-mono-wide text-text-muted">
          {numLabel}
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {badge && (
          <span className="flex items-center gap-1.5 font-mono text-mono-label uppercase text-accent">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            {badge}
          </span>
        )}

        <h2 className="font-serif text-[32px] lg:text-[38px] leading-tight text-text-primary">
          {title}
        </h2>

        <p className="font-sans text-body-lg text-text-secondary leading-relaxed max-w-[60ch]">
          {description}
        </p>

        <div>
          <p className="font-mono text-mono-label uppercase text-text-muted mb-3">
            {includesLabel}
          </p>
          <ul className="flex flex-col gap-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-baseline gap-3 font-sans text-body text-text-secondary"
              >
                <span aria-hidden="true" className="text-accent">·</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="font-serif italic text-[20px] border-b-2 border-accent pb-1 text-text-primary hover:text-accent transition w-fit mt-2"
        >
          {ctaText}
          <span className="font-mono text-accent ml-2">→</span>
        </Link>
      </div>

      <aside className="border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6">
        <dl className="flex flex-col gap-3">
          <div className="flex flex-col">
            <dt className="font-mono text-mono-label uppercase text-text-muted">
              {formatLabel}
            </dt>
            <dd className="font-serif text-[20px] text-text-primary leading-tight mt-1">
              {formatValue}
            </dd>
          </div>
        </dl>
      </aside>
    </article>
  );
}
