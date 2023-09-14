import { twMerge } from 'tailwind-merge';

import { withHelloLogger } from '@/components/logger';

import { ReactComponent as AvatarLogo } from './../../../public/assets/avatar.svg';

// TODO: maybe the same for Button and Alert
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  avatarType?: 'dark' | 'light';
}

const Avatar: React.FC<AvatarProps> = ({ avatarType }) => {
  return (
    <div
      className={twMerge(
        'relative w-10 h-10 overflow-hidden rounded-full',
        avatarType === 'light' ? 'bg-martian-lightgray' : 'bg-martian-dark',
      )}
    >
      <AvatarLogo />
    </div>
  );
};

export default withHelloLogger(Avatar);
