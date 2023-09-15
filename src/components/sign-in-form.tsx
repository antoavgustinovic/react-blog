import { useState } from 'react';

import { withHelloLogger } from '@/components/logger';
import Button from '@/components/ui/button';
import FormInput from '@/components/ui/form-input.js';
import { useAuth } from '@/context/auth-context';

// TODO create a Compound Form and chagne style
interface SignInFormFieldProps {
  email: string;
  password: string;
}

const defaultFormFields = {
  email: 'test@mailinator.com',
  password: 'test',
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
    <div className="flex flex-col sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-2/6 p-6 bg-transparent ">
      <h2 className="my-2 text-4xl text-martian-lightgray text-center">Sign in</h2>
      <span className="mb-6 text-martian-gray opacity-50 text-center">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <div className="flex mt-6">
          <Button type="submit">Log In</Button>
        </div>
      </form>
    </div>
  );
};

export default withHelloLogger(SignInForm);
