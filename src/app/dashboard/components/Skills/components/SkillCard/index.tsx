interface SkillCardProps {
  num: number;
  title: string;
  skills: string[];
}

export default function SkillCard({ num, title, skills }: SkillCardProps) {
  const numLabel = String(num).padStart(2, '0');

  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-border">
        <span className="font-mono text-mono-label uppercase text-text-muted">
          {numLabel}
        </span>
        <h3 className="font-serif text-[22px] text-text-primary">{title}</h3>
      </div>
      <ul className="flex flex-col gap-1.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className="font-sans text-small text-text-secondary flex items-baseline gap-2"
          >
            <span aria-hidden="true" className="text-accent">·</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
