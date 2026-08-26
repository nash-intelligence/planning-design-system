import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusChip } from '../../components';

const meta = {
  title: 'Components/Status Chip',
  component: StatusChip,
  parameters: { layout: 'centered' },
  args: { children: 'Running', dot: true, tone: 'success' },
} satisfies Meta<typeof StatusChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const OperationalStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '32px' }}>
      <StatusChip tone="neutral">Draft</StatusChip>
      <StatusChip tone="success" dot>Running</StatusChip>
      <StatusChip tone="info">In review</StatusChip>
      <StatusChip tone="warning" dot>Approval required</StatusChip>
      <StatusChip tone="danger">Blocked</StatusChip>
      <StatusChip tone="violet">Delegated</StatusChip>
    </div>
  ),
};
