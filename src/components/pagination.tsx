import { withHelloLogger } from '@/components/logger';
import Button from '@/components/ui/button';
import Select from '@/components/ui/select';

const paginationItemsPerPage = [
  {
    value: 9,
    label: '9',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 36,
    label: '36',
  },
];

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
  onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => (
  <div className="flex justify-center space-x-5">
    <Button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
      {`<`}
    </Button>
    <div className="flex items-center font-semibold">{currentPage}</div>
    <Button disabled={currentPage === totalPages} className="" onClick={() => onPageChange(currentPage + 1)}>
      {`>`}
    </Button>
    <Select value={itemsPerPage} onChange={onItemsPerPageChange} options={paginationItemsPerPage} />
  </div>
);

export default withHelloLogger(Pagination);
