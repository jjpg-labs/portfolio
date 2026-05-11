'use client';

import { SkillCard } from './components/SkillCard';
import { useLocale } from '@/app/context/LocaleContext';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const allSkills: Skill[] = [
  { name: 'NestJS', level: 5, category: 'Back-End' },
  { name: 'Node.js', level: 5, category: 'Back-End' },
  { name: 'PHP', level: 4, category: 'Back-End' },
  { name: 'Python', level: 3, category: 'Back-End' },
  { name: 'React / Next.js', level: 5, category: 'Front-End' },
  { name: 'TypeScript', level: 5, category: 'Front-End' },
  { name: 'Tailwind CSS', level: 4, category: 'Front-End' },
  { name: 'Redux Toolkit', level: 3, category: 'Front-End' },
  { name: 'Zustand', level: 4, category: 'Front-End' },
  { name: 'Framer Motion', level: 3, category: 'Front-End' },
  { name: 'TanStack Query', level: 3, category: 'Front-End' },
  { name: 'Zod', level: 4, category: 'Front-End' },
  { name: 'PostgreSQL', level: 5, category: 'Bases de Datos' },
  { name: 'Prisma', level: 4, category: 'Bases de Datos' },
  { name: 'MongoDB', level: 3, category: 'Bases de Datos' },
  { name: 'Docker', level: 3, category: 'Infraestructura' },
  { name: 'JWT / Auth', level: 4, category: 'Infraestructura' },
  { name: 'Claude Code', level: 5, category: 'IA / LLMs' },
  { name: 'Claude API', level: 4, category: 'IA / LLMs' },
  { name: 'MCP (Model Context Protocol)', level: 3, category: 'IA / LLMs' },
  { name: 'Prompt engineering', level: 4, category: 'IA / LLMs' },
];

const CATEGORY_ORDER = [
  'Back-End',
  'Front-End',
  'Bases de Datos',
  'Infraestructura',
  'IA / LLMs',
];

export default function SkillsClient() {
  const { t } = useLocale();
  const { title, categories, levels } = t.skillsPage;

  const groupedSkills = allSkills.reduce<Record<string, Skill[]>>((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-50">
          {title}
        </h1>

        <div className="space-y-8">
          {CATEGORY_ORDER.map((cat) =>
            groupedSkills[cat] ? (
              <SkillCard
                key={cat}
                category={categories[cat] ?? cat}
                skills={groupedSkills[cat]}
                levels={levels}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
