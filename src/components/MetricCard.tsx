import type { ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import './components.css';

export interface MetricCardProps {
  change?: string;
  direction?: 'down' | 'flat' | 'up';
  eyebrow: string;
  icon?: ReactNode;
  value: string;
}

const directionIcons = {
  down: ArrowDownRight,
  flat: Minus,
  up: ArrowUpRight,
};

export function MetricCard({ change, direction = 'flat', eyebrow, icon, value }: MetricCardProps) {
  const DirectionIcon = directionIcons[direction];

  return (
    <article className="nash-metric">
      <div className="nash-metric__topline">
        <span className="nash-metric__eyebrow">{eyebrow}</span>
        {icon ? <span className="nash-metric__icon" aria-hidden="true">{icon}</span> : null}
      </div>
      <strong className="nash-metric__value">{value}</strong>
      {change ? (
        <span className={`nash-metric__change nash-metric__change--${direction}`}>
          <DirectionIcon size={14} aria-hidden="true" />
          {change}
        </span>
      ) : null}
    </article>
  );
}
