import type { Meta, StoryObj } from "@storybook/react";

import { TextSection } from "./TextSection";

const meta: Meta<typeof TextSection> = {
  component: TextSection,
};

export default meta;
type Story = StoryObj<typeof TextSection>;

export const Primary: Story = {
  args: {
    header: "Hello",
    subheader: "Here's who I am & what I do",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};
