import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { withLogger } from '@/components/logger';
import { HELLO_MESSAGE } from '@/constants/constants';

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <div>OOPS! Error.</div>;
  }
}

export default withLogger(ErrorPage, HELLO_MESSAGE);
