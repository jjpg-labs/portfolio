'use client';

import { SkillCard } from './components/SkillCard';
import { useLocale } from '@/app/context/LocaleContext';
import { SKILLS, SKILL_CATEGORY_ORDER, type Skill } from './data';

export default function SkillsClient() {
  const { t } = useLocale();
  const { title, categories, levels } = t.skillsPage;

  const groupedSkills = SKILLS.reduce<Record<string, Skill[]>>((acc, skill) => {
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
          {SKILL_CATEGORY_ORDER.map((cat, idx) =>
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
