import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { MenuOverlay } from "./MenuOverlay";
import { fn } from "storybook/test";

const meta: Meta<typeof MenuOverlay> = {
  render: (props) => <MenuOverlay {...props} />,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "/" },
    }),
  },
  component: MenuOverlay,
  args: { onClose: fn() },
};

export default meta;
type Story = StoryObj<typeof MenuOverlay>;

export const Primary: Story = {
  parameters: {
    layout: "fullscreen",
  },
};
