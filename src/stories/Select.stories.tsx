import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select, SelectProps } from '../components';
import '../style/globals.css';

const countries = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile'];

const RenderSelect = (args: SelectProps) => {
  const [selected, setSelected] = React.useState(args.selected);

  return (
    <div className="min-h-40">
      <Select
        {...args}
        selected={selected}
        onSelect={(value) => {
          setSelected(value);
        }}
      />
    </div>
  );
};

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: {
        type: 'select',
        options: countries,
      },
      description: 'The currently selected option, if none is passed, the first option will be selected',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    options: {
      control: {
        type: 'select',
      },
      description: 'The options to select from',
      table: {
        type: {
          summary: 'string[]',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the select is disabled or not',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: 'Function to call when an option is selected',
      table: {
        type: {
          summary: 'function',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
  args: {
    selected: countries[0],
    options: countries,
    disabled: false,
  },
  render: (args) => {
    return <RenderSelect {...args} />;
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
