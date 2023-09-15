import { withHelloLogger } from '@/components/logger';
import Avatar from '@/components/ui/avatar';
import { CommentResponse } from '@/types';

// TODO go through all types and extend the Reponse ones
interface CommentProps extends Omit<CommentResponse, 'id' | 'postId'> {}

const Comment: React.FC<CommentProps> = ({ name, body, email }) => {
  return (
    <article className="p-6 mb-6 text-base bg-martian-darkgray rounded-lg">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="inline-flex items-center sm:space-x-3">
            <Avatar />
            <span className="text-md font-bold text-white">{name}</span>
            <span className="text-sm text-martian-gray">({email})</span>
          </div>
        </div>
      </footer>
      <p className="text-martian-lightgray">{body}</p>
    </article>
  );
};

export default withHelloLogger(Comment);
