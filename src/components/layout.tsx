import { PropsWithChildren } from 'react';

import Header from '@/components/header';
import { withHelloLogger } from '@/components/logger';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default withHelloLogger(Layout);
