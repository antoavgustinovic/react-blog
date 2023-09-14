import { useParams } from 'react-router-dom';

import { withHelloLogger } from '@/components/logger';
import Alert, { ALERT_TYPE } from '@/components/ui/alert';
import Post from '@/components/ui/post';
import Spinner from '@/components/ui/spinner';
import { usePost } from '@/hooks/use-posts';

function PostPage() {
  const { id } = useParams();
  const { data: post, error, isLoading } = usePost(id);

  if (error) {
    return (
      <Alert alertType={ALERT_TYPE.info}>
        There was an error while retrieving the post. Please refresh the page or try again later.
      </Alert>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!post) {
    return (
      <Alert alertType={ALERT_TYPE.info}>
        Sorry the post you are looking for was not found. Please try again later.
      </Alert>
    );
  }

  return <Post title={post.title} body={post.body} author={post.author} />;
}

export default withHelloLogger(PostPage);
