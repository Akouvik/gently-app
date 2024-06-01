import {BoxInteractive as Component} from './BoxInteractive';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'box-interactive',
  component: Component,
};

export const No2Column: Story = {
  args: {
    selected: 'No2Column',
    size: 'No2Column',
    text: 'title',
  },
};

export const Yes2Column: Story = {
  args: {
    selected: 'Yes2Column',
    size: 'Yes2Column',
    text: 'title',
  },
};

export default meta;
