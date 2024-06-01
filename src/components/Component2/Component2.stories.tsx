import {Component2 as Component} from './Component2';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Component 2',
  component: Component,
};

export const Idea3: Story = {
  args: {
    property1: 'Idea3',
  },
};

export const Idea4: Story = {
  args: {
    property1: 'Idea4',
  },
};

export default meta;
