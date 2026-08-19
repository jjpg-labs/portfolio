'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { LiveDot } from '../LiveDot';
import { ThemeSwitcher } from '../ThemeSwitch';
import { useLocale } from '@/app/context/LocaleContext';

export const GITHUB_URL = 'https://github.com/jjpg95';
export const LINKEDIN_URL =
  'https://www.linkedin.com/in/jose-juan-perez-gonzalez-440a0512b/';
export const EMAIL_ADDRESS =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'jose@jjpg.dev';
// Single source of truth for the Calendly link — every place that needs it
// (Header, Footer, ContactClient, ServicesClient) imports this constant
// instead of hardcoding the URL. Override via NEXT_PUBLIC_CALENDLY_URL if the
// event type slug ever changes without a code deploy.
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  'https://calendly.com/pepeju95/30-min';

export const Footer = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-border-subtle py-10 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-mono-label uppercase text-text-muted">
              Issue <span className="text-accent">02</span> · jjpg.dev · {currentYear}
            </span>
            <LiveDot label={t.hero.availability} />
          </div>

          <div className="flex items-center gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-text-primary transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-text-primary transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Calendly"
              className="text-text-muted hover:text-accent transition"
            >
              <FaCalendarAlt size={20} />
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label={t.a11y.email}
              className="text-text-muted hover:text-accent transition"
            >
              <FaEnvelope size={20} />
            </a>
            <span aria-hidden="true" className="w-px h-5 bg-border-default mx-1" />
            <ThemeSwitcher />
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-mono-label uppercase text-text-muted">
            © {currentYear} Jose Juan Pérez González
          </p>
          <p className="font-mono text-mono-label uppercase text-text-muted">
            {t.footer.bottomLine}
          </p>
        </div>
      </div>
    </div>
  );
};
