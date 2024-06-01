import {Box as Component} from './Box';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'box',
  component: Component,
};

export const No2Columnno: Story = {
  args: {
    icon: 'No2Columnno',
    selected: 'No2Columnno',
    size: 'No2Columnno',
    text: 'title',
  },
};

export const Yes2Columnno: Story = {
  args: {
    icon: 'Yes2Columnno',
    selected: 'Yes2Columnno',
    size: 'Yes2Columnno',
    text: 'title',
  },
};

export const No1Columnno: Story = {
  args: {
    icon: 'No1Columnno',
    selected: 'No1Columnno',
    size: 'No1Columnno',
    text: 'title',
  },
};

export const Yes1Columnno: Story = {
  args: {
    icon: 'Yes1Columnno',
    selected: 'Yes1Columnno',
    size: 'Yes1Columnno',
    text: 'title',
  },
};

export const Yes1Columnyes: Story = {
  args: {
    icon: 'Yes1Columnyes',
    selected: 'Yes1Columnyes',
    size: 'Yes1Columnyes',
    text: 'title',
  },
};

export const No1Columnyes: Story = {
  args: {
    icon: 'No1Columnyes',
    selected: 'No1Columnyes',
    size: 'No1Columnyes',
    text: 'title',
  },
};

export default meta;
