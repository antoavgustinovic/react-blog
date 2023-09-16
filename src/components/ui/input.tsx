import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...otherProps }) => {
  return (
    <input
      className={twMerge(
        'bg-transparent text-martian-gray font-normal text-xl py-2 px-2 w-full border-b border-gray-400 focus:outline-none focus:border-martian-red',
        className,
      )}
      {...otherProps}
    />
  );
};

export default withHelloLogger(Input);
