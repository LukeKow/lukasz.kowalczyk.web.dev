import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pointer } from "./Pointer";

const meta: Meta<typeof Pointer> = {
  component: Pointer,
};

export default meta;
type Story = StoryObj<typeof Pointer>;

export const Primary: Story = {
  args: {
    color: "blue",
    size: "20px",
  },
};
