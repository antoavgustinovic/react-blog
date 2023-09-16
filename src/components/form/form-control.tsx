import React from 'react';

import { withHelloLogger } from '@/components/logger';
import { useForm } from '@/context/form-context';

interface FormControlProps {
  id: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormControl = ({ id, name, required, children }: FormControlProps) => {
  const { values, setFieldValue, setFieldError } = useForm();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value);
    setFieldError(name, '');
  };

  const handleBlur = () => {
    if (required && !values[name]) {
      setFieldError(name, 'This field is required.');
    } else {
      setFieldError(name, '');
    }
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id,
        value: values[name] || '',
        required,
        onChange: handleChange,
        onBlur: handleBlur,
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};
const FormControlWithHelloLogger = withHelloLogger(FormControl);
export { FormControlWithHelloLogger as FormControl };
