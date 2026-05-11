import { ReactNode } from 'react';

interface AccentWordProps {
  children: ReactNode;
}

export function AccentWord({ children }: AccentWordProps) {
  return <em className="accent-word">{children}</em>;
}
