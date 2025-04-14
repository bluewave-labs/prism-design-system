import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import { Ellipsis } from 'lucide-react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableProps,
} from '../components';
import '../style/globals.css';

type TData = {
  domain: string;
  lastQuery: string;
  duration: number;
  cost: number;
  action: string | React.ReactNode;
};

const columns: ColumnDef<TData, TData>[] = [
  {
    accessorKey: 'domain',
    header: 'Domain',
  },
  {
    accessorKey: 'lastQuery',
    header: 'Last Query',
  },
  {
    accessorKey: 'duration',
    header: 'Duration',
    cell: ({ row }) => `${row.original.duration} ms`,
  },
  {
    accessorKey: 'cost',
    header: 'Cost',
    cell: ({ row }) => `$${row.original.cost.toFixed(2)}`,
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => row.original.action,
  },
];

const data = [
  {
    domain: 'example.com',
    lastQuery: '2024-03-20 14:30:00',
    duration: 245,
    cost: 0.12,
    action: (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" rounded="full">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <span>Scrape</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Analyze</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Extract</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    domain: 'test-site.org',
    lastQuery: '2024-03-20 14:25:00',
    duration: 189,
    cost: 0.08,
    action: 'Analyze',
  },
  {
    domain: 'data-source.net',
    lastQuery: '2024-03-20 14:20:00',
    duration: 312,
    cost: 0.15,
    action: 'Extract',
  },
];

const meta: Meta<TableProps<TData, TData>> = {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    columns: {
      control: { type: 'object' },
      description: 'Array of column definitions for the table',
      table: {
        type: { summary: 'ColumnDef<TData, TValue>[]' },
        defaultValue: { summary: '[]' },
      },
    },
    data: {
      control: { type: 'object' },
      description: 'Array of data objects to be displayed in the table',
      table: {
        type: { summary: 'TData[]' },
        defaultValue: { summary: '[]' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Custom CSS class for the table',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      }
    },
  },
  args: {
    columns,
    data,
    className: 'text-left',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
