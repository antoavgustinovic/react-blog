import { createContext, useContext } from 'react';

interface FormContextProps {
  values: Record<string, string>;
  errors: Record<string, string>;
  formError: string;
  setFieldValue: (field: string, value: string) => void;
  setFieldError: (field: string, error: string) => void;
  setFormError: (error: string) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
