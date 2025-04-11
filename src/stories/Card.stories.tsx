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
      description: 'The variant of the card.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    asChild: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the card will be rendered as the child component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'object',
      description: 'The content of the card.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'Card' },
      },
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
