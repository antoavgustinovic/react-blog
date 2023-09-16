import { useMemo } from 'react';

import { PostProps } from '@/types';

interface UseFilteredPostsProps {
  posts: PostProps[] | undefined;
  searchQuery: string;
}

export const useFilteredPosts = ({ posts, searchQuery }: UseFilteredPostsProps) => {
  return useMemo(() => {
    return posts?.filter((post) => {
      const query = searchQuery.trim().toLowerCase();
      return post.author.toLowerCase().startsWith(query);
    });
  }, [searchQuery, posts]);
};
