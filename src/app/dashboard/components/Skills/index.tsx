'use client';

import SkillCard from './components/SkillCard';
import { useLocale } from '@/app/context/LocaleContext';

export default function Skills() {
  const { t } = useLocale();
  const { title, groups } = t.dashboardSkills;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">
          {title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map(({ title: groupTitle, skills }) => (
            <div key={groupTitle}>
              <SkillCard title={groupTitle} skills={skills as string[]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
