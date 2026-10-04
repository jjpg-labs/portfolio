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
  /** Context paragraph for the category — the substance /skills adds over the
   *  home preview, which only renders bare tag lists. */
  intro?: string;
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

// Buckets the category's skills by level, strongest first, keeping the order
// they have in `skills/data.ts` inside each bucket.
const groupByLevel = (skills: Skill[], labels: LevelLabels) => {
  const groups = new Map<number, { label: string; bars: number; names: string[] }>();
  for (const skill of skills) {
    const { label, bars } = getLevelLabel(skill.level, labels);
    const group = groups.get(bars) ?? { label, bars, names: [] };
    group.names.push(skill.name);
    groups.set(bars, group);
  }
  return [...groups.values()].sort((a, b) => b.bars - a.bars);
};

export function SkillCard({
  category,
  skills,
  levels = DEFAULT_LEVELS,
  num,
  intro,
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

      {intro && (
        <p className="font-sans text-body text-text-secondary leading-relaxed max-w-[68ch] mb-6">
          {intro}
        </p>
      )}

      {/* Grouped by level instead of one bar per skill: with most of the stack
          at the same level, a repeated bar stopped telling strengths apart.
          The label column is fluid on mobile (stacked) so long labels like
          "INTERMEDIATE" never push the page sideways. */}
      <dl className="flex flex-col">
        {groupByLevel(skills, levels).map(({ label, bars, names }) => (
          <div
            key={bars}
            className="grid grid-cols-1 sm:grid-cols-[11rem_minmax(0,1fr)] gap-x-6 gap-y-2 py-4 border-b border-border-subtle last:border-b-0"
          >
            <dt className="flex items-center gap-3 font-mono text-mono-label uppercase text-text-muted">
              <span className="flex items-center gap-0.5 w-12 shrink-0" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < bars ? 'bg-accent' : 'bg-border-subtle'
                    }`}
                  />
                ))}
              </span>
              {label}
            </dt>
            <dd className="font-sans text-body text-text-primary">
              <ul className="flex flex-wrap gap-x-3 gap-y-1">
                {names.map((name, i) => (
                  <li key={name} className="flex items-baseline gap-3">
                    <span>{name}</span>
                    {i < names.length - 1 && (
                      <span aria-hidden="true" className="text-text-muted">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
