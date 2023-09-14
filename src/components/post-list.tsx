import { withHelloLogger } from '@/components/logger';
import PostCard from '@/components/post-card';
import Alert from '@/components/ui/alert';
import { PostProps } from '@/types';

interface PostListProps {
  posts?: PostProps[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (!posts || posts?.length === 0) {
    return <Alert> No posts found.</Alert>;
  }

  return (
    <section className="py-8 mx-auto">
      <div className="grid gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default withHelloLogger(PostList);
