interface ProjectCardProps {
  num: number;
  name: string;
  description: string;
  stack: string;
}

export default function ProjectCard({
  num,
  name,
  description,
  stack,
}: ProjectCardProps) {
  const numLabel = String(num).padStart(2, '0');

  return (
    <article className="border border-border rounded-md overflow-hidden bg-bg-surface flex flex-col hover:border-border-strong transition-colors">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-border-subtle">
        <span className="font-mono text-mono-label uppercase text-text-muted">
          // p{num} · {name.toLowerCase().replace(/\s+/g, '-')}
        </span>
        <span className="font-mono text-mono-label uppercase text-text-muted">
          {numLabel}
        </span>
      </div>

      <div className="px-4 py-5 flex-1 flex flex-col gap-3">
        <h3 className="font-serif text-[26px] leading-tight text-text-primary">
          {name}
        </h3>
        <p className="font-sans text-small text-text-secondary leading-relaxed">
          {description}
        </p>
        <p className="font-mono text-mono-label uppercase text-text-muted mt-auto pt-3 border-t border-border-subtle">
          <span className="text-accent">Stack ·</span> {stack}
        </p>
      </div>
    </article>
  );
}
