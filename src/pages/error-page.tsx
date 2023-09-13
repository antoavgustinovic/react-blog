import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <div>OOPS! Error.</div>;
  }
}

export default withHelloLogger(ErrorPage);
