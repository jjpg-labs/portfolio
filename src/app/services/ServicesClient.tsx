'use client';

import Link from 'next/link';
import { FaRocket, FaWrench, FaBrain, FaLightbulb } from 'react-icons/fa';
import { IconType } from 'react-icons';
import ServiceCard from './components/ServiceCard';
import { useLocale } from '@/app/context/LocaleContext';

const PACKAGE_ICONS: Record<string, IconType> = {
  mvp: FaRocket,
  retainer: FaWrench,
  ai: FaBrain,
  consulting: FaLightbulb,
};

export default function ServicesClient() {
  const { t } = useLocale();
  const { title, subtitle, ctaText, ctaFootnote, includesLabel, packages } =
    t.servicesPage;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-50">
          {title}
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-14 max-w-3xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <ServiceCard
              key={pkg.id}
              icon={PACKAGE_ICONS[pkg.id]}
              title={pkg.title}
              description={pkg.description}
              bullets={pkg.bullets}
              formatLabel={pkg.formatLabel}
              formatValue={pkg.formatValue}
              includesLabel={includesLabel}
              ctaText={ctaText}
              badge={'badge' in pkg ? (pkg as { badge?: string }).badge : undefined}
            />
          ))}
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-14 text-lg">
          {ctaFootnote}{' '}
          <Link
            href="/contact"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            {ctaText}
          </Link>
        </p>
      </div>
    </section>
  );
}
