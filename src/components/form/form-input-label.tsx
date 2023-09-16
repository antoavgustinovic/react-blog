import { withHelloLogger } from '@/components/logger';
import Label from '@/components/ui/label';
import { useForm } from '@/context/form-context';

interface FormInputLabelProps {
  name: string;
  children: React.ReactNode;
}

const FormInputLabel = ({ name, children, ...otherProps }: FormInputLabelProps) => {
  const { values } = useForm();
  const valueStyle = values[name] ? '-top-2 text-xs' : 'top-2 peer-focus:text-martian-red';

  return (
    <Label className={`${valueStyle} absolute left-2 transition-all duration-300`} {...otherProps}>
      {children}
    </Label>
  );
};

const FormInputLabelWithHelloLogger = withHelloLogger(FormInputLabel);
export { FormInputLabelWithHelloLogger as FormInputLabel };
