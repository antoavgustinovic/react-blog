import { withHelloLogger } from '@/components/logger';
import { Comment } from '@/components/ui';
import { CommentResponse } from '@/types';

interface CommentListProps {
  comments: CommentResponse[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const hasComments = comments.length > 0;

  return (
    <section className="py-8 pt-8 pb-16 px-4 mx-auto max-w-5xl antialiased">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold  dark:text-white">
          Discussion {hasComments && `(${comments.length})`}
        </h2>
      </div>
      {hasComments ? (
        comments.map((comment) => (
          <Comment key={comment.id} name={comment.name} body={comment.body} email={comment.email} userAvatar />
        ))
      ) : (
        <div>No comments found.</div>
      )}
    </section>
  );
};

export default withHelloLogger(CommentList);
