import { PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Layout } from '@/components/layout';
import { withHelloLogger } from '@/components/logger';
import { useAuth } from '@/context/auth-context';

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Layout>{children ? children : <Outlet />}</Layout>;
};

export default withHelloLogger(ProtectedRoute);
