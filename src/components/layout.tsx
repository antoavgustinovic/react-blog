import { PropsWithChildren } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { withHelloLogger } from '@/components/logger';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer>Copyright © 2023. Anto Avgustinović</Footer>
    </div>
  );
};

export default withHelloLogger(Layout);
