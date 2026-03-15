'use client';

import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/app/components/Footer';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useLocale } from '@/app/context/LocaleContext';

export default function ContactInfo() {
  const { t } = useLocale();
  const { title, subtitle, location } = t.contactInfo;

  return (
    <div className="p-6 bg-blue-600 dark:bg-gray-900 text-white rounded-lg shadow-xl h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="mb-8 text-blue-100 dark:text-gray-300">{subtitle}</p>

      <div className="space-y-4 text-blue-100 dark:text-gray-300">
        <div className="flex items-center">
          {FaEnvelope({ className: 'mr-3 text-xl' })}
          <p>{EMAIL_ADDRESS}</p>
        </div>
        <div className="flex items-center">
          {FaPhone({ className: 'mr-3 text-xl' })}
          <p>+34 619 67 39 66</p>
        </div>
        <div className="flex items-center">
          {FaMapMarkerAlt({ className: 'mr-3 text-xl' })}
          <p>{location}</p>
        </div>
      </div>

      <div className="mt-8 flex space-x-6">
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white dark:hover:text-blue-400 transition"
        >
          {FaLinkedin({ size: 28 })}
        </Link>
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white dark:hover:text-blue-400 transition"
        >
          {FaGithub({ size: 28 })}
        </Link>
      </div>
    </div>
  );
}
