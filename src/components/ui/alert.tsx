import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

const Alert: React.FC<PropsWithChildren<AlertProps>> = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={twMerge(
        'flex items-center p-4 mx-2 mt-2 mb-4 text-base text-red-800 border border-red-400 rounded-lg bg-red-200',
        className,
      )}
      role="alert"
      {...otherProps}
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 mr-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      {children}
    </div>
  );
};

export default withHelloLogger(Alert);
