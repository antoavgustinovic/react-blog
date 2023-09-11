import { twMerge } from 'tailwind-merge';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="relative mb-5 mt-3">
      <input
        {...otherProps}
        className={twMerge(
          'bg-white text-gray-500 font-normal text-xl py-2 px-2 w-full border-b border-gray-400 focus:outline-none focus:border-black',
        )}
      />
      {label && (
        <label
          className={`${
            otherProps.value ? '-top-4 text-black text-xs' : 'top-2'
          } text-subColor text-md font-normal absolute left-2 transition-all duration-300`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
