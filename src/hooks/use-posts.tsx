import { useMemo } from 'react';
import { AxiosError } from 'axios';
import useSWR from 'swr';

import { USERS_URL_KEY } from '@/constants/constants';
import { useUsers } from '@/hooks/use-users';
import { CommentResponse, PostResponse, UserResponse } from '@/types';

const POSTS_URL_KEY = 'posts';

export const usePosts = () => {
  const { data: posts, error: postsError, isLoading: postsLoading } = useSWR<PostResponse[], AxiosError>(POSTS_URL_KEY);
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
  const {
    data: post,
    error: postError,
    isLoading: postLoading,
  } = useSWR<PostResponse, AxiosError>(() => (id ? `${POSTS_URL_KEY}/${id}` : null));

  const {
    data: comments,
    error: commentsError,
    isLoading: commentsLoading,
  } = useSWR<CommentResponse[], AxiosError>(() => (id ? `${POSTS_URL_KEY}/${id}/comments` : null));

  const {
    data: user,
    error: userError,
    isLoading: usersLoading,
  } = useSWR<UserResponse>(() => (post ? `${USERS_URL_KEY}/${post?.userId}` : null));

  const postData = useMemo(
    () => ({
      ...post,
      author: user?.name,
      comments: comments,
    }),
    [comments, post, user?.name],
  );

  const error = postError || userError || commentsError;
  const isLoading = postLoading || usersLoading || commentsLoading;

  return {
    data: postData,
    error,
    isLoading,
  };
};
