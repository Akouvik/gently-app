import {Header as Component} from './Header';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'header',
  component: Component,
};

export const Onboarding: Story = {
  args: {
    showProgressBar: true,
    showBack: true,
    showLogo: false,
    showSkip: true,
    page: 'Onboarding',
  },
};

export const Main: Story = {
  args: {
    showProgressBar: true,
    showBack: true,
    showLogo: false,
    showSkip: true,
    page: 'Main',
  },
};

export default meta;
