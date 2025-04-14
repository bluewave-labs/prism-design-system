import type { Meta, StoryObj } from '@storybook/react';
import { Copy, Link } from 'lucide-react';
import { Input } from '../components';
import '../style/globals.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'icon', 'label-out', 'no-label'],
      description: 'The variant of the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'The label of the input.',
      table: {
        type: { summary: 'string' },
      },
    },
    iconLeft: {
      control: 'object',
      description: 'The left icon of the input.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      }
    },
    iconRight: {
      control: 'object',
      description: 'The right icon of the input.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      }
    },
    error: {
      control: 'boolean',
      description: 'Whether the input has an error.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of the input.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    variant: 'default',
    label: 'Input Label',
    iconLeft: <Link />,
    iconRight: <Copy />,
    placeholder: 'Placeholder',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Input Label',
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    variant: 'icon',
    iconRight: undefined
  },
};

export const IconRight: Story = {
  args: {
    ...Default.args,
    variant: 'icon',
    iconRight: <Copy />,
    iconLeft: undefined,
  },
};

export const IconLeftAndRight: Story = {
  args: {
    ...Default.args,
    variant: 'icon',
    iconLeft: <Link />,
    iconRight: <Copy />,
  },
};

export const LabelOut: Story = {
  args: {
    ...Default.args,
    variant: 'label-out',
  },
};

export const NoLabel: Story = {
  args: {
    ...Default.args,
    variant: 'no-label',
  },
};
