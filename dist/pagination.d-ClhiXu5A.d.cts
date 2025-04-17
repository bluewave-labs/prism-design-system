import React__default from 'react';

interface PaginationProps extends React__default.ComponentProps<'nav'> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export type { PaginationProps as P };
