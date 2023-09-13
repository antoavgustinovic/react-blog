import { withHelloLogger } from '@/components/logger';
import PostCard from '@/components/ui/post-card';
import { PostResponse } from '@/types';

interface PostProps {
  post: PostResponse;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, body } = post;

  return <PostCard title={title} body={body} onClick={() => {}} />;
};

export default withHelloLogger(Post);
