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
      control: 'select',
      options: ['default', 'secondary', 'ghost', 'link', 'destructive'],
      description: 'The variant of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'md', 'lg', 'icon'],
      description: 'The size of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    rounded: {
      control: 'select',
      options: ['default', 'sm', 'md', 'lg', 'full'],
      description: 'The border radius of the button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      }
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'If true, the button will be rendered as the child component.',
      table: {
        type: { summary: 'boolean' },
      }
    },
    children: {
      control: 'object',
      description: 'The content of the button.',
      table: {
        type: { summary: 'ReactNode' },
      }
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
