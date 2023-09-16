import { useState } from 'react';

interface UsePaginationProps {
  initialPage: number;
  initialItemsPerPage: number;
}

export const usePagination = ({ initialPage, initialItemsPerPage }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
  };

  return { currentPage, itemsPerPage, handlePageChange, handleItemsPerPageChange };
};
