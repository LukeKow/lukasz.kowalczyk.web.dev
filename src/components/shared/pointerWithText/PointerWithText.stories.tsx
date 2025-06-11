import type { Meta, StoryObj } from "@storybook/react-vite";

import { PointerWithText } from "./PointerWithText";

const meta: Meta<typeof PointerWithText> = {
  component: PointerWithText,
};

export default meta;
type Story = StoryObj<typeof PointerWithText>;

export const Primary: Story = {
  args: {
    text: "Dummy text",
  },
};
