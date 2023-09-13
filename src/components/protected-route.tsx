import { Navigate, useLocation } from 'react-router-dom';

import Layout from '@/components/layout';
import { withHelloLogger } from '@/components/logger';
import { useAuth } from '@/context/auth-context';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Layout>{children}</Layout>;
}

export default withHelloLogger(ProtectedRoute);
