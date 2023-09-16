import { withHelloLogger } from '@/components/logger';
import Avatar from '@/components/ui/avatar';

interface PostProps {
  title: string;
  body: string;
  author?: string;
  userAvatar?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

// TODO try to extract the svgs
const PostCard: React.FC<PostProps> = ({ title, body, author, userAvatar, onClick }) => {
  return (
    <article className="flex flex-col justify-between p-6 bg-martian-lightgray rounded-lg border border-martian-darkgray shadow-md">
      <div className="flex justify-between items-center mb-5 text-martian-darkgray">
        <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
              clipRule="evenodd"
            ></path>
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
          </svg>
          Article
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-martian-red hover:cursor-pointer" onClick={onClick}>
        {title}
      </h2>
      <p className="mb-5 font-light text-martian-dark line-clamp-4">{body}</p>
      <div className="flex justify-between items-center">
        {author && (
          <div className="flex items-center space-x-4">
            {userAvatar && <Avatar />}
            <span className="font-medium text-martian-red">{author}</span>
          </div>
        )}
        <div
          className="inline-flex items-center font-medium text-martian-red hover:underline hover:cursor-pointer"
          onClick={onClick}
        >
          Read more
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </article>
  );
};

export default withHelloLogger(PostCard);
