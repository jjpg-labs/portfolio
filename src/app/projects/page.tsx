import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Proyectos | Jose Juan',
  description:
    'Proyectos desarrollados por Jose Juan — aplicaciones Full-Stack con Next.js, NestJS, TypeScript y PostgreSQL.',
  alternates: { canonical: 'https://jjpg.dev/projects' },
  openGraph: {
    title: 'Proyectos | Jose Juan',
    description:
      'Proyectos desarrollados por Jose Juan — aplicaciones Full-Stack con Next.js, NestJS, TypeScript y PostgreSQL.',
    url: 'https://jjpg.dev/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
