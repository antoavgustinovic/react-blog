import { PropsWithChildren } from 'react';

import { withHelloLogger } from '@/components/logger';

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return <footer className="py-8 text-center text-martian-darkgray">{children}</footer>;
};

const FooterWithHelloLogger = withHelloLogger(Footer);
export { FooterWithHelloLogger as Footer };
