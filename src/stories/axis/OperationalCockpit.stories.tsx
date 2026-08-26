import type { Meta, StoryObj } from '@storybook/react-vite';
import { AxisShell, OperationalCockpit } from '../../axis';

const meta = {
  title: 'Axis Experiences/Operational Cockpit',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Synthetic Axis home experience for attention, active work, proof completeness, spend and control posture.' } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HealthyWithAttention: Story = {
  render: () => <AxisShell activeItem="Home"><OperationalCockpit /></AxisShell>,
};
