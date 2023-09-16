import { useNavigate } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';
import PostCard from '@/components/ui/post-card';
import { PostProps } from '@/types';

interface PostCardProps {
  post: PostProps;
}

const PostCardComponent: React.FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();
  const { title, body, author } = post;

  const handleOnClick = () => {
    navigate(`/post/${post.id}`);
  };

  return <PostCard title={title} body={body} author={author} onClick={handleOnClick} />;
};

const PostCardComponentWithHelloLogger = withHelloLogger(PostCardComponent);
export { PostCardComponentWithHelloLogger as PostCardComponent };
