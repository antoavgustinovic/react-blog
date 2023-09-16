import { Form, FormControl, FormErrorMessage, FormHelperText, FormInput } from '@/components/form';
import { withHelloLogger } from '@/components/logger';
import Button from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { SignInFormFieldProps } from '@/types';

// TODO remove later
const defaultValues = {
  email: 'test@mailinator.com',
  password: 'test',
};

const SignInForm = () => {
  const { handleLogin } = useAuth();

  const handleSubmit = (values: SignInFormFieldProps) => handleLogin(values);

  return (
    <div className="flex flex-col sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-2/6 p-6 bg-transparent ">
      <h2 className="my-2 text-4xl text-martian-lightgray text-center">Sign in</h2>
      <span className="mb-6 text-martian-gray opacity-50 text-center">Sign in with your email and password</span>
      <Form onSubmit={handleSubmit} defaultValues={defaultValues}>
        <FormControl id="email" name="email" required>
          <FormInput name="email" label="Email" type="email" />
          <FormHelperText name="email">Please enter your email.</FormHelperText>
          <FormErrorMessage name="email" />
        </FormControl>
        <FormControl id="password" name="password" required>
          <FormInput name="password" label="Password" type="password" />
          <FormHelperText name="password">Please enter your password.</FormHelperText>
          <FormErrorMessage name="password" />
        </FormControl>
        <FormErrorMessage name="form" />
        <Button className="w-full mt-3" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default withHelloLogger(SignInForm);
