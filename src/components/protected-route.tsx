import { Navigate, useLocation } from 'react-router-dom';

import { withLogger } from '@/components/logger';
import { HELLO_MESSAGE } from '@/constants/constants';
import { useAuth } from '@/hooks/use-auth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default withLogger(ProtectedRoute, HELLO_MESSAGE);
