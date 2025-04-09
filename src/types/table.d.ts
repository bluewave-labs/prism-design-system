import { ColumnDef } from '@tanstack/react-table';

export interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
}
