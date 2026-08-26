import type { Meta, StoryObj } from '@storybook/react-vite';
import { AxisShell, AxisWelcome } from '../../axis';

const meta = {
  title: 'Axis Experiences/Application Shell',
  component: AxisShell,
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Exploratory global shell for tenant-aware Axis administration. Controls are visual specimens and do not call a backend.' } },
  },
} satisfies Meta<typeof AxisShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItem: 'Home',
    children: <AxisWelcome />,
  },
};
