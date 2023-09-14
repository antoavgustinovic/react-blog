import { AxiosError } from 'axios';
import useSWR from 'swr';

import { fetcher } from '@/service/posts-service';
import { UserResponse } from '@/types';

export const USERS_URL_KEY = 'users';

export const useUsers = () => {
  return useSWR<UserResponse[], AxiosError>(USERS_URL_KEY, fetcher);
};
