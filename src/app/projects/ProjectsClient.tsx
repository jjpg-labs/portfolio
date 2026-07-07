'use client';

import ProjectCard from './components/ProjectCard';
import { useLocale } from '@/app/context/LocaleContext';
import { PROJECTS, ProjectMeta } from './data';

export interface Project extends ProjectMeta {
  shortDescription: string;
  outcome?: string;
}

type ProjectCopy = Record<
  string,
  { home: string; full: string; outcome: string }
>;

export default function ProjectsClient() {
  const { t } = useLocale();
  const { title, subtitle } = t.projectsPage;
  const copy = t.projectCopy as ProjectCopy;

  const projects: Project[] = PROJECTS.map((base) => ({
    ...base,
    shortDescription: copy[base.id]?.full ?? '',
    outcome: copy[base.id]?.outcome || undefined,
  }));

  return (
    <section className="px-4 sm:px-8 lg:px-14 py-12 lg:py-16 bg-bg-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 font-mono text-mono-label uppercase text-text-muted">
          <span>{t.ui.metaProjects}</span>
          <span>
            {t.ui.issue} <span className="text-accent">02</span>
          </span>
        </div>

        <header className="mb-12">
          <h1 className="font-serif text-h1 sm:text-display lg:text-[80px] leading-none text-text-primary">
            {title}
          </h1>
          <p className="font-sans text-body-lg text-text-secondary mt-4 max-w-[60ch]">
            {subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} num={idx + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
