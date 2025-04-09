/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Copy, Download, Ellipsis } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
} from '../../components';
import { cn } from '../../lib/utils';
import { TableProps } from '../../types';
import codeToHtml from '../../utils/codeToHtml';

type QueryData = {
  domain: string;
  lastQuery: string;
  duration: number;
  cost: number;
  action: string | React.ReactNode;
};

const columns: ColumnDef<QueryData>[] = [
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

type OrderData = {
  date: string;
  description: string;
  amount: number;
  action: React.ReactNode;
};

const columns2: ColumnDef<OrderData>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => new Date(row.original.date).toLocaleDateString(),
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => `$${row.original.amount.toFixed(2)}`,
  },
  {
    accessorKey: 'action',
    header: '',
    cell: ({ row }) => row.original.action,
  },
];

const data2 = [
  {
    date: '03-27-2025',
    description: 'Uptime Standard',
    amount: 89.0,
    action: (
      <Button variant="ghost" rounded="full">
        <Download />
      </Button>
    ),
  },
  {
    date: '03-26-2025',
    description: 'Uptime Standard',
    amount: 89.0,
    action: (
      <Button variant="ghost" rounded="full">
        <Download />
      </Button>
    ),
  },
];

type OptionsType = 'default' | 'example-2';

const baseProps = {
  columns,
  data,
  className: 'text-left',
};

const options: {
  option: OptionsType;
  text: string;
  prop: (val: TableProps<QueryData, QueryData>) => TableProps<QueryData, QueryData>;
}[] = [
  {
    option: 'default',
    text: 'Default',
    prop: () => baseProps,
  },
  {
    option: 'example-2',
    text: 'Example 2',
    prop: () => ({
      columns: columns2 as ColumnDef<QueryData>[],
      data: data2 as unknown as QueryData[],
      className: 'max-w-[700px] text-center',
    }),
  },
];

const propTypes = `interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
}`;

export default function Home() {
  const [props, setProps] = useState<Record<string, any>>(baseProps);
  const [htmlProps, setHtmlProps] = useState<string>('');
  const [selected, setSelected] = useState<OptionsType[]>([options[0].option]);
  const [propType, setPropType] = useState<string>('');

  const buildHtmlProps = async () => {
    const sanitizedProps = {
      ...props,
      columns: props.columns.map((column: ColumnDef<any>) => ({
        ...column,
        cell: column.cell?.toString(),
        header: column.header?.toString(),
      })),
      data: props.data.map((item: QueryData | OrderData) => {
        const newItem = { ...item };
        if (typeof item.action === 'object') {
          newItem.action = ReactDOMServer.renderToString(item.action);
        }
        return newItem;
      }),
    };
    const html = await codeToHtml(JSON.stringify(sanitizedProps, null, 2));
    setHtmlProps(html);
  };

  const buildPropTypes = async () => {
    const propToHtml = await codeToHtml(propTypes);
    setPropType(propToHtml);
  };

  useEffect(() => {
    buildHtmlProps();
  }, [props]);

  useEffect(() => {
    if (selected.length === 0) {
      setSelected([options[0].option]);
      setProps(baseProps);
    }
  }, [selected]);

  useEffect(() => {
    buildPropTypes();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-screen">
      <div className="flex flex-col items-center gap-2 p-4 h-[500px] justify-center w-full">
        <Table columns={[]} data={[]} {...props} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-gray-0 w-[500px]">
        {options.map((option) => (
          <button
            key={option.option}
            className={cn(
              'border border-gray-10 text-gray-10 px-4 py-2 rounded-3xl cursor-pointer md:w-50',
              selected.includes(option.option) ? 'bg-gray-20 text-gray-90' : 'hover:bg-gray-0/12 hover:text-gray-10'
            )}
            onClick={() => {
              if (option.option === options[0].option) {
                setSelected([option.option]);
              } else {
                const isSelected = selected.includes(option.option);
                const newList = selected.filter((it) => it !== options[0].option);
                setSelected(
                  isSelected ? newList.filter((item) => item !== option.option) : [...newList, option.option]
                );
              }
              setProps((prev) => option.prop(prev as unknown as TableProps<QueryData, QueryData>));
            }}
          >
            {option.text}
          </button>
        ))}
        <div className="relative mt-4 w-[95%] overflow-auto h-[40%]">
          <button
            className="text-gray-50 absolute top-4 right-8 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(propTypes);
            }}
            title="Copy props to clipboard"
          >
            <Copy />
          </button>
          <p
            className="flex flex-col mx-auto bg-gray-100 p-2 w-full h-full overflow-auto"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(propType) }}
          />
        </div>
      </div>
      <div className="w-[500px] h-screen p-4 relative">
        <button
          className="text-gray-50 absolute top-20 right-8 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(props, null, 2));
          }}
          title="Copy props to clipboard"
        >
          <Copy />
        </button>
        <h2 className="font-medium text-xl mb-4">Props</h2>
        <p
          className="flex flex-col w-full min-w-[300px] bg-gray-100 h-[90%] overflow-auto p-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlProps) }}
        />
      </div>
    </div>
  );
}
