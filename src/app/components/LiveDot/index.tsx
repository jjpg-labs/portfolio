interface LiveDotProps {
  label: string;
  className?: string;
}

export function LiveDot({ label, className = '' }: LiveDotProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-mono-label uppercase text-text-primary ${className}`}
    >
      <span
        aria-hidden="true"
        className="w-2 h-2 rounded-full bg-accent pulse-live"
      />
      {label}
    </span>
  );
}
