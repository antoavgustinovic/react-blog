import { withHelloLogger } from '@/components/logger';
import Avatar from '@/components/ui/avatar';

interface PostProps {
  title?: string;
  body?: string;
  author?: string;
}

const Post: React.FC<PostProps> = ({ title, body, author }) => {
  return (
    <div className="flex justify-between px-4 mx-auto max-w-screen-xl pt-8 pb-16 antialiased">
      <article className="mx-auto w-full max-w-5xl">
        <header className="mb-4 lg:mb-6">
          <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center space-x-4 mr-3">
              <Avatar avatarType="light" />
              <div>
                <p rel="author" className="text-xl font-bold text-martian-red">
                  {author}
                </p>
                <p className="text-base text-martian-gray">Author</p>
              </div>
            </div>
          </address>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-martian-red lg:mb-6 lg:text-5xl">{title}</h1>
        </header>
        <p>{body}</p>
      </article>
    </div>
  );
};

export default withHelloLogger(Post);
