import {LogoIcon as Component} from './LogoIcon';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'logo-icon',
  component: Component,
};

export const LogoIcon: Story = {
  // ...
};

export default meta;
