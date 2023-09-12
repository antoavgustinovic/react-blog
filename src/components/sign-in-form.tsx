import { useState } from 'react';

import { withLogger } from '@/components/logger';
import Button from '@/components/ui/button';
import FormInput from '@/components/ui/form-input.js';
import { HELLO_MESSAGE } from '@/constants/constants';
import { useAuth } from '@/hooks/use-auth';

interface SignInFormFieldProps {
  email: string;
  password: string;
}

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState<SignInFormFieldProps>(defaultFormFields);
  const { handleLogin } = useAuth();

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(email, password);
    resetFormFields();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col w-1/3 border-2 rounded-xl p-6">
      <h2 className="my-2 text-4xl m-auto">Sign in</h2>
      <span className="mb-6 opacity-50 m-auto">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <div className="flex justify-between mt-6">
          <Button type="submit">Log In</Button>
        </div>
      </form>
    </div>
  );
};

export default withLogger(SignInForm, HELLO_MESSAGE);
