'use client';

import Link from 'next/link';
import { FaRocket, FaWrench, FaBrain, FaLightbulb } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useLocale } from '@/app/context/LocaleContext';

const PACKAGE_ICONS: Record<string, IconType> = {
  mvp: FaRocket,
  retainer: FaWrench,
  ai: FaBrain,
  consulting: FaLightbulb,
};

export default function Services() {
  const { t } = useLocale();
  const { title, subtitle, seeAll, packages } = t.dashboardServices;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">
          {title}
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            const Icon = PACKAGE_ICONS[pkg.id];
            const badge =
              'badge' in pkg ? (pkg as { badge?: string }).badge : undefined;
            const featured = Boolean(badge);
            return (
              <Link
                key={pkg.id}
                href="/services"
                className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-6 text-left flex flex-col border ${
                  featured
                    ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20'
                    : 'border-gray-100 dark:border-gray-700'
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 right-4 px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-blue-600 text-white shadow-md uppercase tracking-wider">
                    {badge}
                  </span>
                )}
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mb-4">
                  {Icon ? Icon({ size: 22 }) : null}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                  {pkg.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pkg.summary}
                </p>
              </Link>
            );
          })}
        </div>

        <Link
          href="/services"
          className="mt-12 inline-block bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          {seeAll} &rarr;
        </Link>
      </div>
    </section>
  );
}
