'use client';

import ProjectCard from './components/ProjectCard';
import { FaServer } from 'react-icons/fa';
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-50">
          {FaServer({
            className: 'inline-block mr-3 text-blue-600 dark:text-blue-400',
            size: 32,
          })}
          {title}
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
