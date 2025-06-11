import type { Meta, StoryObj } from "@storybook/react-vite";

import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  argTypes: {
    bgColor: {
      control: "radio",
      options: ["orange", "blue", "pink", "white", "none"],
    },
  },
  args: {
    bgColor: "pink",
    children: "Yada yada",
  },
};
