import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components';
import '../style/globals.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'action', 'destructive', 'outline', 'outline_active', 'secondary', 'ghost', 'link'],
      control: 'select',
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'md', 'lg', 'icon'],
    },
    rounded: {
      control: 'select',
      options: ['default', 'sm', 'md', 'lg', 'full'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
    children: {
      control: 'object',
    },
  },
  args: { onClick: fn(), variant: 'default', size: 'default', rounded: 'default', children: <a href="#">Button</a> },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
  },
};
