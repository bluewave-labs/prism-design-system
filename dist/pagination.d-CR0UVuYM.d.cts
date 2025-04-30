import React__default from 'react';

interface PaginationProps extends React__default.ComponentProps<'nav'> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  itemClassName?: string;
  linkClassName?: string;
}

export type { PaginationProps as P };
