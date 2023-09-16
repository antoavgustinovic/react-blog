import { withHelloLogger } from '@/components/logger';
import Avatar from '@/components/ui/avatar';

interface CommentProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  body: string;
  email?: string;
  userAvatar?: boolean;
}

const Comment: React.FC<CommentProps> = ({ name, body, email, userAvatar }) => {
  return (
    <article className="p-6 mb-6 text-base bg-martian-darkgray rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="inline-flex items-center sm:space-x-3">
          {userAvatar && <Avatar />}
          <span className="text-md font-bold text-white">{name}</span>
          {email && <span className="text-sm text-martian-gray">({email})</span>}
        </div>
      </div>
      <p className="text-martian-lightgray">{body}</p>
    </article>
  );
};

export default withHelloLogger(Comment);
