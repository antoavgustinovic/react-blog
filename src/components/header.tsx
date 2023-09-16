import { withHelloLogger } from '@/components/logger';
import Button from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';

const Header = () => {
  const { handleLogout } = useAuth();

  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-3xl font-bold">
        <a href="/app">
          React <span className="text-martian-red">Blog</span>
        </a>
      </h1>
      <Button buttonType="red" onClick={handleLogout}>
        Logout
      </Button>
    </header>
  );
};

export default withHelloLogger(Header);
