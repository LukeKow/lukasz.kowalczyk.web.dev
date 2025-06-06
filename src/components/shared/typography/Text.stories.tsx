import type { Meta, StoryObj } from "@storybook/react";

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
    textColor: {
      control: "select",
      options: ["blue", "orange", "black", "pink"],
    },
  },
  args: {
    text: "Dummy text",
    fontType: "header",
    textColor: "black",
    textCustomStyle: "text-black",
  },
};
