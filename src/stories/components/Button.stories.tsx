import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, Plus, Sparkles } from 'lucide-react';
import { Button } from '../../components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Buttons communicate the authority and consequence of an action. Primary emphasis is intentionally scarce.',
      },
    },
  },
  args: {
    children: 'Ask Nash',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { icon: <Sparkles size={16} /> },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '32px' }}>
      <Button icon={<Plus size={16} />}>Create agent</Button>
      <Button variant="secondary">Review evidence</Button>
      <Button variant="ghost" trailingIcon={<ArrowRight size={15} />}>View details</Button>
      <Button variant="danger">Cancel session</Button>
      <Button disabled>Unavailable</Button>
    </div>
  ),
};
