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
  repoPrivate?: boolean;
}

const BASE_PROJECTS: Omit<Project, 'shortDescription'>[] = [
  {
    id: '1',
    title: 'Accounting Suite',
    technologies: [
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Next.js 15',
      'Redux Toolkit',
      'Tailwind CSS',
      'TypeScript',
      'JWT',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p1.jpg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg-labs/accounting-server',
  },
  {
    id: '2',
    title: 'Curio',
    technologies: ['Next.js 16', 'Prisma', 'Zustand', 'TypeScript', 'PostgreSQL'],
    role: 'Full-Stack',
    imageCover: '/img/p2.jpg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg-labs/curio',
    repoPrivate: true,
  },
  {
    id: '3',
    title: 'Soluciones Integrales',
    technologies: ['PHP', 'MVC', 'MySQL', 'HTML/CSS'],
    role: 'Back-End',
    imageCover: '/img/p3.jpg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg95/insurance-companies',
  },
];

export default function ProjectsPage() {
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
