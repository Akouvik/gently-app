import {LogoFull as Component} from './LogoFull';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'logo-full',
  component: Component,
};

export const LogoFull: Story = {
  // ...
};

export default meta;
