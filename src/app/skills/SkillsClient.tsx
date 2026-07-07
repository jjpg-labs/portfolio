'use client';

import { SkillCard } from './components/SkillCard';
import { useLocale } from '@/app/context/LocaleContext';

interface Skill {
  name: string;
  level: number;
  category: string;
}

// "Experto" is reserved for the core stack (NestJS, React/Next, TypeScript,
// PostgreSQL); everything else is Avanzado/Intermedio so each level reads as
// earned. Low-signal libs were trimmed to keep the list focused.
const allSkills: Skill[] = [
  { name: 'NestJS', level: 5, category: 'Back-End' },
  { name: 'Node.js', level: 4, category: 'Back-End' },
  { name: 'PHP', level: 4, category: 'Back-End' },
  { name: 'Symfony', level: 4, category: 'Back-End' },
  { name: 'API Platform', level: 4, category: 'Back-End' },
  { name: 'React / Next.js', level: 5, category: 'Front-End' },
  { name: 'TypeScript', level: 5, category: 'Front-End' },
  { name: 'React Admin', level: 4, category: 'Front-End' },
  { name: 'Tailwind CSS', level: 4, category: 'Front-End' },
  { name: 'React Native / NativeWind', level: 3, category: 'Front-End' },
  { name: 'Zustand', level: 4, category: 'Front-End' },
  { name: 'TanStack Query', level: 3, category: 'Front-End' },
  { name: 'Zod', level: 4, category: 'Front-End' },
  { name: 'PostgreSQL', level: 5, category: 'Bases de Datos' },
  { name: 'Prisma', level: 4, category: 'Bases de Datos' },
  { name: 'Redis', level: 3, category: 'Bases de Datos' },
  { name: 'Docker', level: 4, category: 'Infraestructura' },
  { name: 'Kubernetes', level: 3, category: 'Infraestructura' },
  { name: 'AWS (EKS, RDS, S3)', level: 3, category: 'Infraestructura' },
  { name: 'Terraform', level: 3, category: 'Infraestructura' },
  { name: 'Playwright', level: 4, category: 'Infraestructura' },
  { name: 'JWT / Auth', level: 4, category: 'Infraestructura' },
  { name: 'Claude Code', level: 4, category: 'IA / LLMs' },
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
    <section className="px-4 sm:px-8 lg:px-14 py-12 lg:py-16 bg-bg-base min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 font-mono text-mono-label uppercase text-text-muted">
          <span>{t.ui.metaSkills}</span>
          <span>
            {t.ui.issue} <span className="text-accent">02</span>
          </span>
        </div>

        <header className="mb-12">
          <h1 className="font-serif text-h1 sm:text-display lg:text-[80px] leading-none text-text-primary">
            {title}
          </h1>
        </header>

        <div className="flex flex-col">
          {CATEGORY_ORDER.map((cat, idx) =>
            groupedSkills[cat] ? (
              <SkillCard
                key={cat}
                num={idx + 1}
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
