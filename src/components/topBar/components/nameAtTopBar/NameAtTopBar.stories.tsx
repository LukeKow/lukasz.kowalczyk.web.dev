import type { Meta, StoryObj } from '@storybook/react';

import { NameAtTopBar } from './NameAtTopBar';

const meta: Meta<typeof NameAtTopBar> = {
	component: NameAtTopBar,
};

export default meta;
type Story = StoryObj<typeof NameAtTopBar>;

export const Primary: Story = {
	args: {
		name: "Łukasz Kowalczyk"
	},
};