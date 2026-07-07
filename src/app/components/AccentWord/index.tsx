import { ReactNode } from 'react';

interface AccentWordProps {
  children: ReactNode;
  /** Draws a single accent underline once on mount (the hero signature detail). */
  underline?: boolean;
}

export function AccentWord({ children, underline = false }: AccentWordProps) {
  return (
    <em className={`accent-word${underline ? ' accent-underline' : ''}`}>
      {children}
    </em>
  );
}
