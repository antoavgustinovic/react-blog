import { withHelloLogger } from '@/components/logger';
import { useForm } from '@/context/form-context';

interface FormHelperText {
  name: string;
  children: React.ReactNode;
}

const FormHelperText = ({ name, children, ...otherProps }: FormHelperText) => {
  const { errors } = useForm();

  return !errors[name] ? (
    <p className="mb-4 text-martian-gray" {...otherProps}>
      {children}
    </p>
  ) : null;
};

const FormHelperTextWithHelloLogger = withHelloLogger(FormHelperText);
export { FormHelperTextWithHelloLogger as FormHelperText };
