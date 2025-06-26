import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  argTypes: {
    fontType: {
      control: "select",
      options: ["header", "subheader", "body", "sideNote"],
    },
  },
  args: {
    text: "Dummy text",
    fontType: "header",
    textCustomStyle: "text-black",
  },
};
