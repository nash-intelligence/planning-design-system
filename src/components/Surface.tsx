import type { HTMLAttributes, ReactNode } from 'react';
import './components.css';

export interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'section';
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  tone?: 'default' | 'subtle' | 'emphasis';
}

export function Surface({
  as: Element = 'div',
  children,
  className = '',
  padding = 'md',
  tone = 'default',
  ...props
}: SurfaceProps) {
  return (
    <Element
      className={`nash-surface nash-surface--${tone} nash-surface--pad-${padding} ${className}`.trim()}
      {...props}
    >
      {children}
    </Element>
  );
}
