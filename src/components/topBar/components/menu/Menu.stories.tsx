import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    color: "#FFB738",
  },
};
