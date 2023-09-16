import { PropsWithChildren } from 'react';

import { Footer } from '@/components/layout';
import { Header } from '@/components/layout';
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

const LayoutWithHelloLogger = withHelloLogger(Layout);
export { LayoutWithHelloLogger as Layout };
