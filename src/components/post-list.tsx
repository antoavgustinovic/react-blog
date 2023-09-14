import { withHelloLogger } from '@/components/logger';
import PostCard from '@/components/post-card';
import { PostResponse } from '@/types';

interface PostListProps {
  posts: PostResponse[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
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
