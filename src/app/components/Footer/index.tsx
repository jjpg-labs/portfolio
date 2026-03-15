'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLocale } from '@/app/context/LocaleContext';

export const GITHUB_URL = 'https://github.com/jjpg95';
export const LINKEDIN_URL =
  'https://www.linkedin.com/in/jose-juan-perez-gonzalez-440a0512b/';
export const EMAIL_ADDRESS = 'pepeju95@gmail.com';

export const Footer = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 py-8 mt-12 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            {FaGithub({ size: 24 })}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-700 transition"
          >
            {FaLinkedin({ size: 24 })}
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            aria-label="Correo Electrónico"
            className="text-gray-500 dark:text-gray-400 hover:text-red-600 transition"
          >
            {FaEnvelope({ size: 24 })}
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t.footer.tagline} | &copy; {currentYear} Jose Juan Pérez González.
        </p>
      </div>
    </div>
  );
};
