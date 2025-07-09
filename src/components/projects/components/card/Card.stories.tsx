import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: "Dummy title",
    myRoleDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    theme: "pink",
    myRoleName: "Web developer",
    image: { url: "" },
  },
};
