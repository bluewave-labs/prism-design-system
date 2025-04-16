import { ColumnDef } from '@tanstack/react-table';

interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  onRowClick?: (row: TData) => void;
}

export type { TableProps as T };
