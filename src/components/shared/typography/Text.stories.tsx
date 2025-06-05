import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  argTypes: {
    tType: {
      control: "select",
      options: ["header", "subheader", "body", "sideNote"],
    },
    tColor: {
      control: "select",
      options: ["blue", "orange", "black", "pink"],
    },
  },
  args: {
    text: "Dummy text",
    tType: "header",
    tColor: "black",
    cssClass: "text-black",
  },
};
