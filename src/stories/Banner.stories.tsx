import type { Meta, StoryObj } from '@storybook/react';
import { AlertDescription, AlertTitle, Banner } from '../components';
import '../style/globals.css';

const meta: Meta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'closeable'],
      description: 'Variant of the banner',
      table: {
        type: {
          summary: 'default | destructive | closeable',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    children: {
      control: {
        type: 'object',
      },
      description: 'Children of the banner',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    className: {
      control: {
        type: 'text',
      },
      description: 'Class name for the main tabs component',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  args: {
    variant: 'default',
    className: 'w-[800px] mx-auto',
    children: (
      <>
        <AlertTitle>Hello</AlertTitle>
        <AlertDescription>World</AlertDescription>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
