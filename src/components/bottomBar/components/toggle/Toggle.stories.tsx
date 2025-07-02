import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  args: {
    toggleTheme: {
      text: "text-blue-900",
      accent: "text-blue-700",
      bg: "bg-blue-100",
      accentBg: "bg-blue-100",
    },
  },
};
