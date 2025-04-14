import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../components';
import '../style/globals.css';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
      description: 'Indicates whether the switch is checked or not.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Indicates whether the switch is disabled or not.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      defaultValue: undefined,
    },
    id: {
      control: {
        type: 'text',
      },
      description: 'The id of the switch element.',
      table: {
        type: {
          summary: 'string',
        },
      },
      defaultValue: 'undefined',
    },
    onCheckedChange: {
      control: {
        accept: 'function',
      },
      description: 'Callback function called when the checked state changes.',
      table: {
        type: {
          summary: '(checked: boolean) => void',
        },
      },
      defaultValue: undefined,
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'The size of the switch.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    }
  },
  args: {
    checked: false,
    disabled: undefined,
    id: 'switch',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
