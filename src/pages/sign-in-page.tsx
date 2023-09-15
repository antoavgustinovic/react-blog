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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl font-bold mb-16 text-center">
        Welcome to React <span className="text-martian-red">Blog</span>
      </h1>
      <SignInForm />
    </div>
  );
}

export default withHelloLogger(SignInPage);
