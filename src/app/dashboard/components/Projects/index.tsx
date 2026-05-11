'use client';

import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import { useLocale } from '@/app/context/LocaleContext';

export default function Projects() {
  const { t } = useLocale();
  const { title, subtitle, seeAll, items } = t.dashboardProjects;

  return (
    <section className="px-4 sm:px-8 lg:px-14 py-16 lg:py-20 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <h2 className="font-serif text-[28px] sm:text-[40px] lg:text-[48px] leading-tight text-text-primary">
              {title}
            </h2>
            <p className="font-sans text-body text-text-secondary max-w-[60ch] mt-2">
              {subtitle}
            </p>
          </div>
          <span className="font-mono text-mono-label uppercase text-text-muted">
            // 03 — proyectos
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map(({ name, description, stack }, idx) => (
            <ProjectCard
              key={name}
              num={idx + 1}
              name={name}
              description={description}
              stack={stack}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/projects"
            className="font-serif italic text-[20px] border-b-2 border-accent pb-1 text-text-primary hover:text-accent transition"
          >
            {seeAll}
            <span className="font-mono text-accent ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
