import type { Meta, StoryObj } from '@storybook/react';
import { Copy, Link } from 'lucide-react';
import { Input } from '../components';
import '../style/globals.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'icon', 'label-out', 'no-label'],
    },
    label: {
      control: 'text',
    },
    iconLeft: {
      control: 'object',
    },
    iconRight: {
      control: 'object',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
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
