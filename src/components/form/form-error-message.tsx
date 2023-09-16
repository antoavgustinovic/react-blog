import { withHelloLogger } from '@/components/logger';
import { useForm } from '@/context/form-context';

interface FormErrorMessageProps {
  name: string;
}

const FormErrorMessage = ({ name, ...otherProps }: FormErrorMessageProps) => {
  const { values, errors, formError } = useForm();
  const error = formError ? formError : errors[name];

  return !values[name] && error ? (
    <p className="mb-4 text-red-600 font-semibold" {...otherProps}>
      {error}
    </p>
  ) : null;
};

const FormErrorMessageWithHelloLogger = withHelloLogger(FormErrorMessage);
export { FormErrorMessageWithHelloLogger as FormErrorMessage };
