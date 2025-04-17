import { PaginationProps } from '../../types';
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

export const Pagination = ({ currentPage, totalPages, onPageChange, className, ...props }: PaginationProps) => {
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;

  const renderPageNumbers = () => {
    const pages = [];

    pages.push(
      <PaginationItem key={1}>
        <PaginationLink href="#" isActive={1 === currentPage} onClick={() => onPageChange(1)}>
          1
        </PaginationLink>
      </PaginationItem>
    );

    const range = 1;
    const start = Math.max(2, currentPage - range);
    const end = Math.min(totalPages - 1, currentPage + range);

    if (start > 2) {
      pages.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" isActive={i === currentPage} onClick={() => onPageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (end < totalPages - 1) {
      pages.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" isActive={totalPages === currentPage} onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <PaginationComponent className={className} {...props}>
      <PaginationContent>
        {showPrevious ? (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => onPageChange(currentPage - 1)} />
          </PaginationItem>
        ) : null}

        {renderPageNumbers()}

        {showNext ? (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => onPageChange(currentPage + 1)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
