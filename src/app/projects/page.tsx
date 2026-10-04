import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

const TITLE = 'Proyectos | José Juan';
const DESCRIPTION =
  'Cinco proyectos full-stack de José Juan con el reto, el resultado y la decisión técnica de cada uno: ' +
  'SaaS multi-tenant, apps offline-first y APIs REST con Next.js, NestJS, TypeScript y PostgreSQL.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://jjpg.dev/projects' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://jjpg.dev/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
