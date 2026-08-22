import type { Metadata } from 'next';
import SkillsClient from './SkillsClient';

const TITLE = 'Skills | Jose Juan';
const DESCRIPTION =
  'Stack técnico de Jose Juan con nivel real por tecnología y el contexto en el que ha usado cada una: ' +
  'NestJS, PHP/Symfony, React/Next.js, PostgreSQL, RabbitMQ, OpenSearch y Claude API.';

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
