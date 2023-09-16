import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { withHelloLogger } from '@/components/logger';
import { PostList } from '@/components/post';
import { Alert } from '@/components/ui';
import { Search } from '@/components/ui';
import { Spinner } from '@/components/ui';
import { useDebounce } from '@/hooks/use-debounce';
import { usePosts } from '@/hooks/use-posts';

const HomePage = () => {
  const { data: posts, error, isLoading } = usePosts();
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 400);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts?.filter((post) => {
      const searchQuery = debouncedSearchValue.trim().toLowerCase();
      return post.author.toLowerCase().startsWith(searchQuery);
    });
  }, [debouncedSearchValue, posts]);

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
      <PostList posts={filteredPosts} />
    </>
  );
};

export default withHelloLogger(HomePage);
