'use client';

import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
  MALT_URL,
} from '@/app/components/Footer';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiMalt } from 'react-icons/si';
import { useLocale } from '@/app/context/LocaleContext';

export default function ContactInfo() {
  const { t } = useLocale();
  const { title, subtitle, location } = t.contactInfo;

  return (
    <aside className="flex flex-col gap-8 border border-border rounded-md bg-bg-surface p-8">
      <div>
        <span className="font-mono text-mono-label uppercase text-text-muted">
          // contacto
        </span>
        <h2 className="font-serif text-[28px] lg:text-[34px] leading-tight text-text-primary mt-2">
          {title}
        </h2>
        <p className="font-sans text-body text-text-secondary mt-3 max-w-[42ch]">
          {subtitle}
        </p>
      </div>

      <dl className="flex flex-col">
        <div className="flex justify-between items-center py-3 border-b border-border-subtle">
          <dt className="font-mono text-mono-label uppercase text-text-muted">
            Email
          </dt>
          <dd>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="font-sans text-body text-text-primary hover:text-accent transition"
            >
              {EMAIL_ADDRESS}
            </a>
          </dd>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border-subtle">
          <dt className="font-mono text-mono-label uppercase text-text-muted">
            Base
          </dt>
          <dd className="flex items-center gap-2 font-sans text-body text-text-primary">
            {FaMapMarkerAlt({ size: 12, className: 'text-accent' })}
            {location}
          </dd>
        </div>
        <div className="flex justify-between items-center py-3">
          <dt className="font-mono text-mono-label uppercase text-text-muted">
            Respuesta
          </dt>
          <dd className="font-sans text-body text-text-primary">&lt; 24h</dd>
        </div>
      </dl>

      <div className="flex items-center gap-5 pt-2 border-t border-border-subtle">
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-text-muted hover:text-text-primary transition"
        >
          {FaLinkedin({ size: 22 })}
        </Link>
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-text-muted hover:text-text-primary transition"
        >
          {FaGithub({ size: 22 })}
        </Link>
        <Link
          href={MALT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Malt"
          className="text-text-muted hover:text-accent transition"
        >
          {SiMalt({ size: 22 })}
        </Link>
        <Link
          href={`mailto:${EMAIL_ADDRESS}`}
          aria-label="Correo Electrónico"
          className="text-text-muted hover:text-accent transition"
        >
          {FaEnvelope({ size: 22 })}
        </Link>
      </div>
    </aside>
  );
}
