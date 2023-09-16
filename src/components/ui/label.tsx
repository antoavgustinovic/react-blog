import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<PropsWithChildren<LabelProps>> = ({ children, className }) => {
  return <label className={twMerge('text-martian-darkgray text-md font-normal', className)}>{children}</label>;
};

export default withHelloLogger(Label);
