import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={twMerge(
        'flex justify-center text-white bg-martian-darkgray hover:bg-martian-dark font-bold rounded-lg text-sm px-5 py-2.5',
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default withHelloLogger(Button);
