import type { Meta, StoryObj } from "@storybook/react-vite";

import { MenuOverlay } from "./MenuOverlay";
import { fn } from "storybook/test";

const meta: Meta<typeof MenuOverlay> = {
  component: MenuOverlay,
  args: { onClose: fn() },
};

export default meta;
type Story = StoryObj<typeof MenuOverlay>;

export const Primary: Story = {
  parameters: {
    layout: "fullscreen",
  },
};
