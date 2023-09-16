import React, { useCallback } from 'react';

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

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(name, event.target.value);
      setFieldError(name, '');
    },
    [name, setFieldError, setFieldValue],
  );

  const handleBlur = useCallback(() => {
    if (required && !values[name]) {
      setFieldError(name, 'This field is required.');
    } else {
      setFieldError(name, '');
    }
  }, [name, required, setFieldError, values]);

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
