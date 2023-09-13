import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';
import ProtectedRoute from '@/components/protected-route';
import { AuthContextProvider } from '@/context/auth-context';
import ErrorPage from '@/pages/error-page';
import HomePage from '@/pages/home-page';
import SignInPage from '@/pages/sign-in-page';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <AuthContextProvider>
            <Outlet />
          </AuthContextProvider>
        }
        errorElement={<ErrorPage />}
      >
        <Route path="/" element={<SignInPage />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default withHelloLogger(App);
