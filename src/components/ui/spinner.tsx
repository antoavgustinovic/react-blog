import { withHelloLogger } from '@/components/logger';

import { ReactComponent as SpinnerLogo } from './../../../public/assets/spinner.svg';

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen" role="status">
      <SpinnerLogo />
    </div>
  );
};

export default withHelloLogger(Spinner);
