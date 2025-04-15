import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AlertDescription, AlertTitle, Banner, BannerProps } from '../components';
import '../style/globals.css';

const RenderBanner = (args: BannerProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return <Banner isOpen={isOpen} onClose={() => setIsOpen(false)} {...args} />;
};

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
    isOpen: {
      control: 'boolean',
      description: 'Whether the banner is open',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    onClose: {
      control: { accept: 'function' },
      description: 'Function to handle the close event',
      table: {
        type: { summary: '() => void' },
      },
      defaultValue: {
        summary: '',
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
  render: (args) => <RenderBanner {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
