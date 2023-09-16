import axios from 'axios';

import { getResourceUrl } from '@/utils';

export const fetcher = (resource: string) =>
  axios
    .get(getResourceUrl(resource), {
      headers: {
        'X-Auth': import.meta.env.VITE_X_AUTH,
      },
    })
    .then((res) => res.data);
