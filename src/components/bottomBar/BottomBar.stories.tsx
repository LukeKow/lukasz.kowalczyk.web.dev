import type { Meta, StoryObj } from "@storybook/react-vite";

import { BottomBar } from "./BottomBar";

const meta: Meta<typeof BottomBar> = {
  component: BottomBar,
};

export default meta;
type Story = StoryObj<typeof BottomBar>;

export const Primary: Story = {
  args: {
    color: "blue",
    onToggleContext: () => {},
  },
};
