import type { Meta, StoryObj } from "@storybook/react-vite";

import { TopBar } from "./TopBar";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Primary: Story = {
  args: {},
};
