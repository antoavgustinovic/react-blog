import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';
import { BUTTON_TYPE } from '@/constants/constants';

const baseStyle = 'flex justify-center font-bold rounded-lg text-sm px-5 py-2.5';

const getButtonStyle = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: `${baseStyle} text-martian-lightgray bg-martian-darkgray hover:bg-martian-red`,
    [BUTTON_TYPE.red]: `${baseStyle} text-martian-lightgray bg-martian-red hover:bg-red-800`,
  })[buttonType];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: string;
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
