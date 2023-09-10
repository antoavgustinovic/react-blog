import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import ProtectedRoute from '@/components/protected-route';
import ErrorPage from '@/pages/error-page';
import HomePage from '@/pages/home-page';
import LoginPage from '@/pages/login-page';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<LoginPage />} />
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

export default App;
