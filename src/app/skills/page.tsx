import type { Metadata } from 'next';
import SkillsClient from './SkillsClient';

export const metadata: Metadata = {
  title: 'Skills | Jose Juan',
  description:
    'Habilidades técnicas de Jose Juan — Back-End, Front-End, bases de datos e infraestructura.',
  alternates: { canonical: 'https://jjpg.dev/skills' },
  openGraph: {
    title: 'Skills | Jose Juan',
    description:
      'Habilidades técnicas de Jose Juan — Back-End, Front-End, bases de datos e infraestructura.',
    url: 'https://jjpg.dev/skills',
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
