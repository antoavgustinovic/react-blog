import axios from 'axios';

import { getResourceUrl } from '@/utils/service-helpers';

// TODO see how to handle errors and put a global fetcher
export const fetcher = (resource: string) =>
  axios
    .get(getResourceUrl(resource), {
      headers: {
        'X-Auth': import.meta.env.VITE_X_AUTH,
      },
    })
    .then((res) => res.data);
