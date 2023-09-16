import { FormEvent, useState } from 'react';

import { withHelloLogger } from '@/components/logger';
import { FormContext } from '@/context/form-context';

interface FormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => void | Error;
  defaultValues?: Record<string, string>;
  children: React.ReactNode;
}

const Form = ({ onSubmit, defaultValues, children }: FormProps) => {
  const [values, setValues] = useState<Record<string, string>>({ ...defaultValues });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string>('');

  const setFieldValue = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setFormError('');
  };

  const setFieldError = (field: string, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await onSubmit(values);

    if (result instanceof Error) {
      setFormError(result.message);
    } else {
      setValues({});
    }
  };

  return (
    <FormContext.Provider value={{ values, errors, formError, setFieldValue, setFieldError, setFormError }}>
      <form onSubmit={onSubmitHandler}>{children}</form>
    </FormContext.Provider>
  );
};

const FormWithHelloLogger = withHelloLogger(Form);
export { FormWithHelloLogger as Form };
