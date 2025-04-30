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

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  itemClassName,
  linkClassName,
  ...props
}: PaginationProps) => {
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;

  const renderPageNumbers = () => {
    const pages = [];

    pages.push(
      <PaginationItem key={1} className={itemClassName}>
        <PaginationLink href="#" isActive={1 === currentPage} onClick={() => onPageChange(1)} className={linkClassName}>
          1
        </PaginationLink>
      </PaginationItem>
    );

    const range = 1;
    const start = Math.max(2, currentPage - range);
    const end = Math.min(totalPages - 1, currentPage + range);

    if (start > 2) {
      pages.push(
        <PaginationItem key="ellipsis-start" className={itemClassName}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationItem key={i} className={itemClassName}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={() => onPageChange(i)}
            className={linkClassName}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (end < totalPages - 1) {
      pages.push(
        <PaginationItem key="ellipsis-end" className={itemClassName}>
          <PaginationEllipsis className={linkClassName} />
        </PaginationItem>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={totalPages} className={itemClassName}>
          <PaginationLink
            href="#"
            isActive={totalPages === currentPage}
            onClick={() => onPageChange(totalPages)}
            className={linkClassName}
          >
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
          <PaginationItem className={itemClassName}>
            <PaginationPrevious href="#" onClick={() => onPageChange(currentPage - 1)} className={linkClassName} />
          </PaginationItem>
        ) : null}

        {renderPageNumbers()}

        {showNext ? (
          <PaginationItem className={itemClassName}>
            <PaginationNext href="#" onClick={() => onPageChange(currentPage + 1)} className={linkClassName} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
