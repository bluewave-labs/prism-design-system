'use client';

import * as React from 'react';

import { cn } from '../../lib/utils';

function Table({ className, children, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className={cn('relative w-full overflow-x-auto  border-[0.5px] border-gray-0/20 rounded-xl', className)}
    >
      <table data-slot="table" className={cn('w-full caption-bottom text-sm')} {...props}>
        {children}
      </table>
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('[&_tr]:border-b border-gray-0/20 text-gray-30 bg-gray-0/5', className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody data-slot="table-body" className={cn('[&_tr:last-child]:border-0', className)} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-gray-0/8 border-t border-gray-0/20 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  );
}

function TableHeaderRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-header-row"
      className={cn('h-[2.75rem] border-b-[0.5px] border-gray-0/20 ', className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-gray-0/2 data-[state=selected]:bg-gray-60/20 border-b-[0.5px] border-gray-0/16 transition-colors h-[3.5rem]',
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-gray-30 h-10 px-2 align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return <caption data-slot="table-caption" className={cn('text-gray-60 mt-4 text-sm', className)} {...props} />;
}

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableHeaderRow, TableRow };
