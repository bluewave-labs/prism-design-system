import { ColumnDef } from '@tanstack/react-table';

interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
}

export type { TableProps as T };
