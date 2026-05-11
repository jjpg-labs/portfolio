interface Skill {
  name: string;
  level: number;
  category: string;
}

interface LevelLabels {
  expert: string;
  advanced: string;
  intermediate: string;
  basic: string;
}

const DEFAULT_LEVELS: LevelLabels = {
  expert: 'Experto',
  advanced: 'Avanzado',
  intermediate: 'Intermedio',
  basic: 'Básico',
};

interface SkillCardProps {
  category: string;
  skills: Skill[];
  levels?: LevelLabels;
  num?: number;
}

const getLevelLabel = (
  level: number,
  labels: LevelLabels
): { label: string; bars: number } => {
  if (level >= 5) return { label: labels.expert, bars: 5 };
  if (level >= 4) return { label: labels.advanced, bars: 4 };
  if (level >= 3) return { label: labels.intermediate, bars: 3 };
  return { label: labels.basic, bars: 2 };
};

export function SkillCard({
  category,
  skills,
  levels = DEFAULT_LEVELS,
  num,
}: SkillCardProps) {
  const numLabel = num ? String(num).padStart(2, '0') : '';

  return (
    <section className="border-t border-border py-8">
      <div className="flex items-baseline gap-4 mb-6">
        {numLabel && (
          <span className="font-mono text-small tracking-mono-wide text-text-muted">
            {numLabel}
          </span>
        )}
        <h2 className="font-serif text-[28px] lg:text-[32px] text-text-primary">
          {category}
        </h2>
      </div>

      <ul className="flex flex-col">
        {skills.map((skill) => {
          const { label, bars } = getLevelLabel(skill.level, levels);
          return (
            <li
              key={skill.name}
              className="grid grid-cols-[1fr_120px_80px] gap-4 items-center py-3 border-b border-border-subtle last:border-b-0"
            >
              <span className="font-sans text-body text-text-primary">
                {skill.name}
              </span>
              <span className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < bars ? 'bg-accent' : 'bg-border-subtle'
                    }`}
                  />
                ))}
              </span>
              <span className="font-mono text-mono-label uppercase text-text-muted text-right">
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
