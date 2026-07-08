'use client';

import SkillCard from './components/SkillCard';
import { useLocale } from '@/app/context/LocaleContext';
import { SKILL_PREVIEW_GROUPS } from '@/app/skills/data';

export default function Skills() {
  const { t } = useLocale();
  const { title, groupTitles } = t.dashboardSkills;

  return (
    <section className="border-y border-border bg-bg-surface px-4 sm:px-8 lg:px-14 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <h2 className="font-serif text-[28px] sm:text-[40px] lg:text-[48px] leading-tight text-text-primary">
            {title}
          </h2>
          <span className="font-mono text-mono-label uppercase text-text-muted">
            {t.ui.homeSecSkills}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {SKILL_PREVIEW_GROUPS.map((group, idx) => (
            <SkillCard
              key={group.id}
              num={idx + 1}
              title={groupTitles[group.id] ?? group.id}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
