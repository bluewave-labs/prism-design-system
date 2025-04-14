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
        defaultValue: {
          summary: 'false',
        },
      },
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
    },
  },
  args: {
    size: 'default',
    checked: false,
    disabled: undefined,
    id: 'switch',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
