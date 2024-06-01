import {Gradient as Component} from './Gradient';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'gradient',
  component: Component,
};

export const Default: Story = {
  args: {
    property1: 'Default',
  },
};

export default meta;
