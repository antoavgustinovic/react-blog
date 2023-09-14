import { useMemo } from 'react';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { useUsers } from '@/hooks/use-users';
import { fetcher } from '@/service/posts-service';
import { PostResponse } from '@/types';

const POSTS_URL_KEY = 'posts';

export const usePosts = () => {
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useSWR<PostResponse[], AxiosError>(POSTS_URL_KEY, fetcher);
  const { data: users, error: usersError, isLoading: usersLoading } = useUsers();

  const extendedPosts = useMemo(() => {
    if (!posts || !users) {
      return [];
    }

    const usersMap = new Map(users.map((user) => [user.id, user]));

    return posts.map((post) => {
      const user = usersMap.get(post.userId);
      return {
        ...post,
        author: user?.name || '',
      };
    });
  }, [posts, users]);

  const error = postsError || usersError;
  const isLoading = postsLoading || usersLoading;

  return {
    data: extendedPosts,
    error,
    isLoading,
  };
};

export const usePost = (id?: string) => {
  // const {
  //   data: post,
  //   error: postError,
  //   isLoading: postLoading,
  // } = useSWR<PostResponse, AxiosError>(() => (id ? `${POSTS_URL_KEY}/${id}` : null), fetcher);
  // const {
  //   data: user,
  //   error: userError,
  //   isLoading: usersLoading,
  // } = useSWR<UserResponse>(() => (post ? `${USERS_URL_KEY}/${post?.userId}` : null), fetcher);

  // const postData = {
  //   ...post,
  //   author: user?.name,
  // };

  // const error = postError || userError;
  // const isLoading = postLoading || usersLoading;

  // console.log('POST: ', postData);
  // console.log('ID: ', id);

  // return {
  //   data: postData,
  //   error,
  //   isLoading,
  // };
  const { data: posts, error, isLoading } = usePosts();

  console.log('POSTS: ', posts);
  console.log('ID: ', id);

  const post =
    id &&
    posts.find((post) => {
      return post.id === +id;
    });
  console.log('POST: ', post);

  return {
    data: post,
    error,
    isLoading,
  };
};

// export const preloadPosts = () => preload(POSTS_URL_KEY, fetcher);
