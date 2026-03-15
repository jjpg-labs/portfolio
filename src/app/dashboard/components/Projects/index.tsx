'use client';

import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import { useLocale } from '@/app/context/LocaleContext';

export default function Projects() {
  const { t } = useLocale();
  const { title, subtitle, seeAll, items } = t.dashboardProjects;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">
          {title}
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({ name, description, stack }) => (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              stack={stack}
            />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-12 inline-block bg-gray-800 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          {seeAll} &rarr;
        </Link>
      </div>
    </section>
  );
}
