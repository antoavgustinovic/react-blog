import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="relative mb-5 mt-3">
      <input
        {...otherProps}
        className={twMerge(
          'bg-transparent text-martian-gray font-normal text-xl py-2 px-2 w-full border-b border-gray-400 focus:outline-none focus:border-martian-red peer',
        )}
      />
      {label && (
        <label
          className={`${
            otherProps.value ? '-top-4 text-xs' : 'top-2 peer-focus:text-martian-red'
          } text-martian-darkgray text-md font-normal absolute left-2 transition-all duration-300`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default withHelloLogger(FormInput);
