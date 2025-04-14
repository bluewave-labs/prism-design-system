import type { Meta, StoryObj } from '@storybook/react';
import { RadioBtn } from '../components';
import '../style/globals.css';

const meta: Meta<typeof RadioBtn> = {
  title: 'Radio',
  component: RadioBtn,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked or not.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled or not.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the radio button.',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'The id for the radio button.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    checked: false,
    disabled: undefined,
    label: 'Radio',
    id: 'radio',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
