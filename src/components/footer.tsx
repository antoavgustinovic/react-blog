import { withHelloLogger } from '@/components/logger';

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <footer className="py-8 text-center text-martian-darkgray">{children}</footer>;
};

export default withHelloLogger(Footer);
