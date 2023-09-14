import { useNavigate } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';
import PostCard from '@/components/ui/post-card';
import { PostResponse } from '@/types';

interface PostCardProps {
  post: PostResponse;
}

const PostCardComponent: React.FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();
  const { title, body } = post;

  const handleOnClick = () => {
    navigate(`/post/${post.id}`);
  };

  return <PostCard title={title} body={body} onClick={handleOnClick} />;
};

export default withHelloLogger(PostCardComponent);
