import type { Meta, StoryObj } from "@storybook/react";

import { MenuOverlay } from "./MenuOverlay";
import { fn } from "@storybook/test";
import { useRef } from "react";
import type { MenuOverlayProps } from "./MenuOverlayTypes";

const meta: Meta<typeof MenuOverlay> = {
  component: MenuOverlay,
  args: { onClose: fn() },
};

export default meta;
type Story = StoryObj<typeof MenuOverlay>;

const StoryWithRefs = (props: MenuOverlayProps) => {
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
  return <MenuOverlay {...props} items={refs} />;
};

export const Primary: Story = {
  render: (args) => <StoryWithRefs {...args} />,
  parameters: {
    layout: "fullscreen",
  },
};
