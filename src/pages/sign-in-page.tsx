import { withLogger } from '@/components/logger';
import SignInForm from '@/components/sign-in-form';
import { HELLO_MESSAGE } from '@/constants/constants';

function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignInForm />
    </div>
  );
}

export default withLogger(SignInPage, HELLO_MESSAGE);
