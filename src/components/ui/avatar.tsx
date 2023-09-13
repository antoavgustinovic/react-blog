import { withHelloLogger } from '@/components/logger';

import { ReactComponent as AvatarLogo } from './../../../public/assets/avatar.svg';

const Avatar = () => {
  return (
    <div className="relative w-10 h-10 overflow-hidden bg-martian-dark rounded-full">
      <AvatarLogo />
    </div>
  );
};

export default withHelloLogger(Avatar);
