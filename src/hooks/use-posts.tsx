import { AxiosError } from 'axios';
import useSWR from 'swr';

import { fetcher } from '@/service/posts-service';
import { PostResponse } from '@/types';

const POSTS_URL_KEY = 'posts';

export const usePosts = () => {
  return useSWR<PostResponse[], AxiosError>(POSTS_URL_KEY, fetcher);
};
export const usePost = (id?: string) => {
  return useSWR<PostResponse, AxiosError>(() => (id ? `${POSTS_URL_KEY}/${id}` : null), fetcher);
};

// export const preloadPosts = () => preload(POSTS_URL_KEY, fetcher);
