import type { Meta, StoryObj } from '@storybook/react';

import '../style/globals.css';
import { Pagination } from '../components';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'The current page number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    totalPages: {
      control: 'number',
      description: 'The total number of pages',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    onPageChange: {
      control: { accept: 'function' },
      description: 'The function to be called when the page number is changed',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
