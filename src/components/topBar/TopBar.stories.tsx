import type { Meta, StoryObj } from "@storybook/react";

import { TopBar } from "./TopBar";
import type { TopBarProps } from "./TopBarTypes";
import { useRef } from "react";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
};

const StoryWithRefs = (props: TopBarProps) => {
  const nullRef = useRef(null);
  const refs = [
    {
      ref: nullRef,
      text: "dummy text 1",
    },
    {
      ref: nullRef,
      text: "dummy text 2",
    },
    {
      ref: nullRef,
      text: "dummy text 3",
    },
  ];
  return <TopBar {...props} menuItems={refs} />;
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Primary: Story = {
  render: (args) => <StoryWithRefs {...args} />,
  args: {
    name: "Łukasz Kowalczyk",
  },
};
