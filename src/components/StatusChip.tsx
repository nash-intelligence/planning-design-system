import type { HTMLAttributes, ReactNode } from 'react';
import './components.css';

export interface StatusChipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  dot?: boolean;
  tone?: 'neutral' | 'success' | 'info' | 'warning' | 'danger' | 'violet';
}

export function StatusChip({
  children,
  className = '',
  dot = false,
  tone = 'neutral',
  ...props
}: StatusChipProps) {
  return (
    <span className={`nash-status nash-status--${tone} ${className}`.trim()} {...props}>
      {dot ? <span className="nash-status__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
