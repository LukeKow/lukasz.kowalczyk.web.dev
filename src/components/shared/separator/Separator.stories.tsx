import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Primary: Story = {
  argTypes: {
    color: {
      control: "select",
      options: [
        "lightBblue",
        "blue",
        "lightOrange",
        "orange",
        "black",
        "lightPink",
        "pink",
      ],
    },
  },
  args: {
    color: "blue",
  },
};
