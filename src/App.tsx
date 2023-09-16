import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { withHelloLogger } from '@/components/logger';
import { AuthContextProvider } from '@/context/auth-context';
import ErrorPage from '@/pages/error-page';
import { routes } from '@/routes';
import { fetcher } from '@/service';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <SWRConfig value={{ fetcher }}>
            <AuthContextProvider>
              <Outlet />
            </AuthContextProvider>
          </SWRConfig>
        }
        errorElement={<ErrorPage />}
      >
        {routes}
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default withHelloLogger(App);
