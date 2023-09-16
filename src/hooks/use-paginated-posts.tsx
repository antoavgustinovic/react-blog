import { useMemo } from 'react';

import { PostProps } from '@/types';

interface UsePaginatedPostsProps {
  posts: PostProps[] | undefined;
  currentPage: number;
  itemsPerPage: number;
}

export const usePaginatedPosts = ({ posts, currentPage, itemsPerPage }: UsePaginatedPostsProps) => {
  return useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return posts?.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, posts]);
};
