import { withHelloLogger } from '@/components/logger';
import Pagination from '@/components/pagination';
import { PostList } from '@/components/post';
import { Alert } from '@/components/ui';
import { Search } from '@/components/ui';
import { Spinner } from '@/components/ui';
import { useDebounce } from '@/hooks/use-debounce';
import { useFilteredPosts } from '@/hooks/use-filtered-posts';
import { usePaginatedPosts } from '@/hooks/use-paginated-posts';
import { usePagination } from '@/hooks/use-pagination';
import { usePosts } from '@/hooks/use-posts';
import { useSearch } from '@/hooks/use-search';

const HomePage = () => {
  const { data: posts, error, isLoading } = usePosts();
  const { currentPage, itemsPerPage, handlePageChange, handleItemsPerPageChange } = usePagination({
    initialPage: 1,
    initialItemsPerPage: 9,
  });
  const { searchValue, handleSearch } = useSearch();
  const debouncedSearchValue = useDebounce(searchValue, 400, () => handlePageChange(1));
  const filteredPosts = useFilteredPosts({ posts, searchQuery: debouncedSearchValue });
  const paginatedPosts = usePaginatedPosts({ posts: filteredPosts, currentPage, itemsPerPage });

  const totalPages = Math.ceil((filteredPosts?.length || 0) / itemsPerPage);

  if (error) {
    return (
      <Alert alertType="danger">
        There was an error while retrieving posts. Please refresh the page or try again later.
      </Alert>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex justify-end py-6">
        <Search value={searchValue} onChange={handleSearch} />
      </div>
      <PostList posts={paginatedPosts} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </>
  );
};

export default withHelloLogger(HomePage);
