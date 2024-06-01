import {Button as Component} from './Button';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'button',
  component: Component,
};

export const Default: Story = {
  args: {
    showIcons: false,
    state: 'Default',
  },
};

export const Disabled: Story = {
  args: {
    showIcons: false,
    state: 'Disabled',
  },
};

export default meta;
