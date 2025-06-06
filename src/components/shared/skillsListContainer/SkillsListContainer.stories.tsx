import type { Meta, StoryObj } from "@storybook/react";

import { SkillsListContainer } from "./SkillsListContainer";

const meta: Meta<typeof SkillsListContainer> = {
  component: SkillsListContainer,
};

export default meta;
type Story = StoryObj<typeof SkillsListContainer>;

export const Primary: Story = {
  args: {
    children: ["test-1", "test-2", "test-3"],
  },
};
