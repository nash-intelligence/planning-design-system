import type { Meta, StoryObj } from '@storybook/react-vite';
import { AgentSessionDetail, AxisShell } from '../../axis';

const meta = {
  title: 'Axis Experiences/Agent Session',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Synthetic durable AgentSession view showing replayable progress, exact approval binding, execution context and proof completeness.' } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const WaitingForApproval: Story = {
  render: () => <AxisShell activeItem="Work"><AgentSessionDetail /></AxisShell>,
};
