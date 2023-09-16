import { createContext, ReactNode, useCallback, useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';
import useLocalStorage from '@/hooks/use-local-storage';
import { SignInFormFieldProps } from '@/types';

const USER_LOGGED_IN = 'userLoggedIn';

interface AuthContextType {
  isLoggedIn?: boolean | null;
  handleLogin: (values: SignInFormFieldProps) => void | Error;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: null,
  handleLogin: () => {},
  handleLogout: () => {},
});

function AuthContextProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setLoggedIn, removeLoggedIn] = useLocalStorage<boolean>({
    key: USER_LOGGED_IN,
    initialValue: false,
  });

  const from: string = (location.state?.from?.pathname as string) || '/app';

  const handleLogin = useCallback(
    (values: SignInFormFieldProps) => {
      const { email, password } = values ?? {};
      if (email === 'test@mailinator.com' && password === 'test') {
        setLoggedIn(true);
        navigate(from, { replace: true });
      }

      return Error('Provided email and password do not match. Please try again!');
    },
    [from, navigate, setLoggedIn],
  );

  const handleLogout = useCallback(() => {
    removeLoggedIn();
    navigate('/');
  }, [navigate, removeLoggedIn]);

  const value = useMemo(
    () => ({
      isLoggedIn,
      handleLogin,
      handleLogout,
    }),
    [isLoggedIn, handleLogin, handleLogout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const AuthContextProviderWithHelloLogger = withHelloLogger(AuthContextProvider);
export { AuthContextProviderWithHelloLogger as AuthContextProvider };

export function useAuth() {
  return useContext(AuthContext);
}
