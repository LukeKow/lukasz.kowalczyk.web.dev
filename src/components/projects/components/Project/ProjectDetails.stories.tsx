import type { Meta, StoryObj } from "@storybook/react";

import { ProjectDetails } from "./ProjectDetails";
import car from "../../../../assets/images/car.jpg";

const meta: Meta<typeof ProjectDetails> = {
  component: ProjectDetails,
};

export default meta;
type Story = StoryObj<typeof ProjectDetails>;

export const Primary: Story = {
  args: {
    projectTheme: "blue",
    title: "Dummy project",
    role: "Dummy role",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    theJob:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tools: ["React", "Typescript", "CSS", "axios", "cypress"],
    imgSrc: car,
  },
};
