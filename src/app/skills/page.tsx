import type { Metadata } from 'next';
import SkillsClient from './SkillsClient';

const TITLE = 'Skills | José Juan';
const DESCRIPTION =
  'Stack técnico de José Juan con nivel real por tecnología y el contexto en el que ha usado cada una: ' +
  'PHP/Symfony, Node.js, React/Next.js y PostgreSQL, y NestJS en proyectos propios.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://jjpg.dev/skills' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://jjpg.dev/skills',
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
