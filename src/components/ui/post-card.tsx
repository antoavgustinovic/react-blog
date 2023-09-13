import { withHelloLogger } from '@/components/logger';
import Avatar from '@/components/ui/avatar';

import { ReactComponent as ArticleLogo } from './../../../public/assets/article.svg';
import { ReactComponent as RightArrowLogo } from './../../../public/assets/right-arrow.svg';

interface PostProps {
  title: string;
  body: string;
  author?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const PostCard: React.FC<PostProps> = ({ title, body, author, onClick }) => {
  return (
    <article className="flex flex-col justify-between p-6 bg-martian-lightgray rounded-lg border border-martian-darkgray shadow-md">
      <div className="flex justify-between items-center mb-5 text-martian-darkgray">
        <span className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
          <ArticleLogo />
          Article
        </span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-martian-red hover:cursor-pointer" onClick={onClick}>
        {title}
      </h2>
      <p className="mb-5 font-light text-martian-dark line-clamp-4">{body}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar />
          <span className="font-medium text-martian-red">{author}</span>
        </div>
        <div
          className="inline-flex items-center font-medium text-martian-red hover:underline hover:cursor-pointer"
          onClick={onClick}
        >
          Read more
          <RightArrowLogo />
        </div>
      </div>
    </article>
  );
};

export default withHelloLogger(PostCard);
