import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';
import SignInForm from '@/components/sign-in-form';
import { useAuth } from '@/context/auth-context';

function SignInPage() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/app');
    }
  }, [navigate, isLoggedIn]);

  return (
    <div className="flex items-center justify-center h-screen">
      <SignInForm />
    </div>
  );
}

export default withHelloLogger(SignInPage);
