import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';
import { Button } from '@/components/ui';

// TODO get back to this later and see the condition
function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-martian-red">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-martian-lightgray md:text-4xl">Page not found.</p>
          <p className="mb-4 text-lg font-light text-martian-darkgray">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <Button className="flex justify-center" onClick={() => navigate('/')}>
          Back to Homepage
        </Button>
      </div>
    );
  }
}

export default withHelloLogger(ErrorPage);
