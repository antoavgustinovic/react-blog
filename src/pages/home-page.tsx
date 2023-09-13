import FilterablePostList from '@/components/blog-list';
import { withHelloLogger } from '@/components/logger';
import Alert, { ALERT_TYPE } from '@/components/ui/alert';
import Spinner from '@/components/ui/spinner';
import { usePosts } from '@/hooks/use-posts';

function HomePage() {
  const { data: posts, error, isLoading } = usePosts();

  if (error) {
    return (
      <Alert alertType={ALERT_TYPE.danger}>
        There was an error while retrieving posts. Please refresh the page or try again later.
      </Alert>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  // TODO move later in the FilterablePostList when filter implemented
  if (!posts || posts?.length === 0) {
    return <Alert> No posts found. Try again later.</Alert>;
  }

  return <FilterablePostList posts={posts} />;
}

export default withHelloLogger(HomePage);
