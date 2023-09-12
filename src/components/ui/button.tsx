import { withLogger } from '@/components/logger';
import { HELLO_MESSAGE } from '@/constants/constants';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button
      className="flex justify-center text-white bg-gray-500 hover:bg-gray-800 font-bold rounded-lg text-sm px-5 py-2.5"
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default withLogger(Button, HELLO_MESSAGE);
