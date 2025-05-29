import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

import me from "../../assets/images/me.jpeg";
import igIcon from "../../assets/icons/Instagram.svg";
import linkedInIcon from "../../assets/icons/LinkedIn.svg";
import gmailIcon from "../../assets/icons/gmail.svg";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    igIcon,
    gmailIcon,
    linkedInIcon,
    title: "Web developer",
    name: "Łukasz Kowalczyk",
    handlePrimaryAction: () => {},
    handleSecondaryAction: () => {},
    igLink: "www.instagram.pl",
    linkedInLink: "www.linkedin.pl",
    mailAddress: "lukasz.kowalczyk.dev@gmail.com",
    imgSrc: me,
  },
};
