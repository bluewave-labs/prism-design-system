import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardFooter, CardTitle, ConsoleButton } from '../components';
import '../style/globals.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
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
      },
    },
    children: {
      control: 'object',
      description: 'The content of the card.',
      table: {
        type: { summary: 'ReactNode' },
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

export const Console: Story = {
  args: {
    variant: 'console',
    className: 'max-w-[300px]',
    children: (
      <div>
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>
          <ConsoleButton>Button</ConsoleButton>
        </CardFooter>
      </div>
    ),
  },
};
