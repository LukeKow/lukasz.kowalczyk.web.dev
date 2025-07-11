import type { Meta, StoryObj } from "@storybook/react-vite";

import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    menuTheme: "blue",
  },
};
