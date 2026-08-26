import { FlaskConical } from 'lucide-react';
import { StatusChip } from './StatusChip';
import './components.css';

export interface DesignStatusProps {
  contract: string;
  maturity?: 'exploratory' | 'candidate' | 'approved';
}

const maturityTone = {
  exploratory: 'warning',
  candidate: 'info',
  approved: 'success',
} as const;

export function DesignStatus({ contract, maturity = 'exploratory' }: DesignStatusProps) {
  return (
    <aside className="nash-design-status" aria-label="Design specimen status">
      <FlaskConical size={16} aria-hidden="true" />
      <span>Storybook specimen</span>
      <StatusChip tone={maturityTone[maturity]}>{maturity}</StatusChip>
      <span className="nash-design-status__contract">Contract: {contract}</span>
    </aside>
  );
}
