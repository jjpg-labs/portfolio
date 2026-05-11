'use client';

import ProjectCard from './components/ProjectCard';
import { useLocale } from '@/app/context/LocaleContext';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  role: 'Front-End' | 'Back-End' | 'Full-Stack';
  imageCover: string;
  linkLive: string;
  linkRepo: string;
  linkRepo2?: string;
  repoPrivate?: boolean;
}

const BASE_PROJECTS: Omit<Project, 'shortDescription'>[] = [
  {
    id: '1',
    title: 'Vereda',
    technologies: [
      'Next.js 16',
      'Neon PostgreSQL',
      'Vercel Blob',
      'JWT',
      'TypeScript',
      'Tailwind 4',
      'React 19',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p4.svg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg-labs/vereda',
    repoPrivate: true,
  },
  {
    id: '2',
    title: 'Medina Roja BTT',
    technologies: [
      'Next.js 16',
      'Leaflet',
      'GPX',
      'Tailwind 4',
      'TypeScript',
      'React 19',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p5.svg',
    linkLive: 'https://medina-roja-btt.vercel.app',
    linkRepo: 'https://github.com/jjpg-labs/medina-roja-btt',
  },
  {
    id: '3',
    title: 'Accounting Suite',
    technologies: [
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Next.js 15',
      'Redux Toolkit',
      'Chart.js',
      'Framer Motion',
      'Zod',
      'TypeScript',
      'JWT',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p1.svg',
    linkLive: 'https://accounting.jjpg.dev',
    linkRepo: 'https://github.com/jjpg-labs/accounting-server',
    linkRepo2: 'https://github.com/jjpg95/accounting-manager',
  },
  {
    id: '4',
    title: 'Curio',
    technologies: [
      'Next.js 16',
      'Prisma',
      'Zustand',
      'TanStack Query',
      'Framer Motion',
      'next-intl',
      'TypeScript',
      'PostgreSQL',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p2.svg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg-labs/curio',
    repoPrivate: true,
  },
];

export default function ProjectsClient() {
  const { t } = useLocale();
  const { title, subtitle, items } = t.projectsPage;

  const projects: Project[] = BASE_PROJECTS.map((base, i) => ({
    ...base,
    shortDescription: items[i].shortDescription,
  }));

  return (
    <section className="px-4 sm:px-8 lg:px-14 py-12 lg:py-16 bg-bg-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 font-mono text-mono-label uppercase text-text-muted">
          <span>// página · proyectos</span>
          <span>Issue <span className="text-accent">02</span></span>
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
