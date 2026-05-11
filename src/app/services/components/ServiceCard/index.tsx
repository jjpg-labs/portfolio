'use client';

import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
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
  icon: Icon,
  title,
  description,
  bullets,
  formatLabel,
  formatValue,
  includesLabel,
  ctaText,
  badge,
}: ServiceCardProps) {
  const featured = Boolean(badge);
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-8 flex flex-col border ${
        featured
          ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20'
          : 'border-gray-100 dark:border-gray-700'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 right-6 px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white shadow-md">
          {badge}
        </span>
      )}
      <div className="flex items-center mb-5">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-4">
          {Icon({ size: 22 })}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          {title}
        </h3>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
        {includesLabel}
      </p>
      <ul className="space-y-2 mb-6 flex-grow">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start text-sm text-gray-700 dark:text-gray-300"
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0">
              {FaCheck({ size: 12 })}
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {formatLabel}
          </p>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {formatValue}
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-blue-600 text-white py-2 px-5 rounded-lg text-sm font-medium hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition shadow"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
