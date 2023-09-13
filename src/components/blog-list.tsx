import { withHelloLogger } from '@/components/logger';
import Post from '@/components/post';
import { PostResponse } from '@/types';

interface BlogListProps {
  posts: PostResponse[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section className="py-8 mx-auto">
      <div className="grid gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default withHelloLogger(BlogList);
