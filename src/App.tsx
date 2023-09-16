import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { AxiosInterceptor } from '@/components/config/axios';
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
          <AuthContextProvider>
            <AxiosInterceptor>
              <SWRConfig value={{ fetcher }}>
                <Outlet />
              </SWRConfig>
            </AxiosInterceptor>
          </AuthContextProvider>
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
