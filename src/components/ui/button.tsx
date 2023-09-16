import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';

const baseStyle = 'flex justify-center font-bold rounded-lg text-sm px-5 py-2.5 disabled:cursor-not-allowed';

const getButtonStyle = (buttonType = 'base') =>
  ({
    base: `${baseStyle} text-martian-lightgray bg-martian-darkgray hover:bg-martian-red disabled:hover:bg-martian-darkgray`,
    red: `${baseStyle} text-martian-lightgray bg-martian-red hover:bg-red-800 disabled:hover:bg-martian-red`,
  })[buttonType];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'base' | 'red';
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, buttonType, className, ...otherProps }) => {
  const style = getButtonStyle(buttonType);

  return (
    <button className={twMerge(style, className)} {...otherProps}>
      {children}
    </button>
  );
};

export default withHelloLogger(Button);
