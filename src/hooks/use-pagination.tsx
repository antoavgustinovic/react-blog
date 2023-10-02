import { useCallback, useState } from 'react';

interface UsePaginationProps {
  initialPage: number;
  initialItemsPerPage: number;
}

export const usePagination = ({ initialPage, initialItemsPerPage }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  const handleItemsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  }, []);

  return { currentPage, itemsPerPage, handlePageChange, handleItemsPerPageChange };
};
