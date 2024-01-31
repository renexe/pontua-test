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
  if (index === totalPages) {
    return index;
  }

  return index + 1;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginatorProps) => {
  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={() => onPageChange(
            handlePreviousNavigation({ index: page })
          )} />
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
                {page > 2 && page < 7 ? page + 1 : ''}
              </div>
            ) : ''}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={() => onPageChange(
            handleNextNavigation({ index: page, totalPages })
          )} />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  )
}

export default Pagination;