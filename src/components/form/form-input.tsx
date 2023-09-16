import { FormInputLabel } from '@/components/form/form-input-label';
import { withHelloLogger } from '@/components/logger';
import { Input } from '@/components/ui';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const FormInput = ({ name, label, ...otherProps }: FormInputProps) => {
  return (
    <div className="relative mb-2 mt-3">
      <Input className="peer" {...otherProps} />
      <FormInputLabel name={name}>{label}</FormInputLabel>
    </div>
  );
};

const FormInputWithHelloLogger = withHelloLogger(FormInput);
export { FormInputWithHelloLogger as FormInput };
