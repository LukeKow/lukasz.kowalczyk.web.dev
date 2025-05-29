import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";
import { ButtonVariants } from "./ButtonTypes";

const meta: Meta<typeof Button> = {
  component: Button,
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  argTypes: {
    variant: {
      control: "radio",
      options: ButtonVariants,
    },
  },
  args: {
    label: "Button",
    color: "orange",
    variant: "contained",
  },
};
