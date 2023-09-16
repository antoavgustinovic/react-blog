import { useParams } from 'react-router-dom';

import CommentList from '@/components/comment-list';
import { withHelloLogger } from '@/components/logger';
import Alert from '@/components/ui/alert';
import Post from '@/components/ui/post';
import Spinner from '@/components/ui/spinner';
import { usePost } from '@/hooks/use-posts';

// TODO see why when scrolling down on home page and clicking the Post opens the post but scrolled down
function PostPage() {
  const { id } = useParams();
  const { data: post, error, isLoading } = usePost(id);

  if (error) {
    return (
      <Alert alertType="danger">
        There was an error while retrieving the post. Please refresh the page or try again later.
      </Alert>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!post) {
    return <Alert>Sorry the post you are looking for was not found. Please try again later.</Alert>;
  }

  return (
    <>
      <Post title={post.title} body={post.body} author={post.author} userAvatar />
      {post.comments && <CommentList comments={post.comments} />}
    </>
  );
}

export default withHelloLogger(PostPage);
