interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES: Record<NonNullable<LogoProps['size']>, number> = {
  sm: 28,
  md: 40,
  lg: 64,
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const dim = SIZES[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 460 460"
      width={dim}
      height={dim}
      className={className}
      role="img"
      aria-label="jjpg-labs"
    >
      <rect x="0" y="0" width="460" height="460" fill="var(--ink)" rx="6" />
      <g>
        <rect x="206.531" y="92.000" width="46.939" height="46.939" fill="var(--paper)" />
        <rect x="263.796" y="92.000" width="46.939" height="46.939" fill="var(--paper)" />
        <rect x="321.061" y="92.000" width="46.939" height="46.939" fill="var(--paper)" />
        <rect x="263.796" y="149.265" width="46.939" height="46.939" fill="var(--paper)" />
        <rect x="263.796" y="206.531" width="46.939" height="46.939" fill="var(--paper)" />
        <rect x="263.796" y="263.796" width="46.939" height="46.939" fill="var(--paper)" />
        <rect x="92.000" y="321.061" width="46.939" height="46.939" fill="var(--accent)" />
        <rect x="149.265" y="321.061" width="46.939" height="46.939" fill="var(--paper)" />
        <rect x="206.531" y="321.061" width="46.939" height="46.939" fill="var(--paper)" />
      </g>
    </svg>
  );
}
