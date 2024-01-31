import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/atoms/pagination";
import { Typography } from "../atoms/typography";
import { cn } from "@/lib/utils";

export interface PaginatorProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const handlePreviousNavigation = ({ index }: { index: number }) => {
  if (index === 0) {
    return index;
  }

  return index - 1;
}

const handleNextNavigation = ({ index, totalPages }: { index: number, totalPages: number }) => {
  if (index + 1 === totalPages) {
    return index;
  }

  return index + 1;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginatorProps) => {
  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={
              cn(page === 0 && "pointer-events-none text-gray-300")
            }
            onClick={() => onPageChange(
              handlePreviousNavigation({ index: page })
            )}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            {index < 3 || index > 6 ? (
              <PaginationLink
                isActive={index === page}
                onClick={() => onPageChange(index)}
                href="#"
              >
                {index + 1}
              </PaginationLink>
            ) : index === 4 ? (
              <div className="relative flex flex-col justify-end items-center">
                <PaginationEllipsis />
                <span className="absolute right-2/4 translate-x-[50%] -top-1 text-xs font-medium">{page > 2 && page < 7 ? page + 1 : ''}</span>
              </div>
            ) : ''}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            className={
              cn(page + 1 === totalPages && "pointer-events-none text-gray-300")
            }
            onClick={() => onPageChange(
              handleNextNavigation({ index: page, totalPages })
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  )
}

export default Pagination;