import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardFooter, CardTitle } from '../components';
import '../style/globals.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'clickable', 'console'],
    },
    asChild: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: 'object',
    },
  },
  args: {
    variant: 'default',
    asChild: false,
    children: (
      <div>
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
