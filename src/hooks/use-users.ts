import { AxiosError } from 'axios';
import useSWR from 'swr';

import { USERS_URL_KEY } from '@/constants/constants';
import { UserResponse } from '@/types';

export const useUsers = () => {
  return useSWR<UserResponse[], AxiosError>(USERS_URL_KEY);
};
