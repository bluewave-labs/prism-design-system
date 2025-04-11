import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card, CardContent, CardFooter, CardTitle, ConsoleButton } from '../components';
import '../style/globals.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'clickable', 'console'],
      },
    },
    asChild: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        accept: 'object',
      },
    }
  },
  args: {
    variant: 'default',
    asChild: false,
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <div>
        <CardTitle>Title</CardTitle>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    variant: 'clickable',
    children: <button className='text-left'>
      <CardTitle>Title</CardTitle>
      <CardContent>Content</CardContent>
      <CardFooter>
        <Button asChild>
          <a href="#">Link</a>
        </Button>
      </CardFooter>
    </button>
  },
};

export const Console: Story = {
  args: {
    variant: 'console',
    children: <div><CardTitle>Title</CardTitle>
      <CardContent>Content</CardContent>
      <CardFooter>
        <ConsoleButton asChild>
          <a href="#">Link</a>
        </ConsoleButton>
      </CardFooter></div>
  },
};
