import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkillsListContainer } from "./SkillsListContainer";

const meta: Meta<typeof SkillsListContainer> = {
  component: SkillsListContainer,
};

export default meta;
type Story = StoryObj<typeof SkillsListContainer>;

export const Primary: Story = {
  render: (props) => (
    <SkillsListContainer {...props}>
      <div>test 1</div>
      <div>test 2</div>
      <div>test 3</div>
    </SkillsListContainer>
  ),
};
