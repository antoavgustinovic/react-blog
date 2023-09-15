import { withHelloLogger } from '@/components/logger';

interface SearchProps {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="relative w-full sm:w-1/2 md:w-2/4 lg:w-2/5 xl:w-2/6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="w-4 h-4 text-martian-lightgray"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="w-full p-4 pl-10 text-sm bg-transparent border rounded-xl placeholder:italic border-martian-lightgray placeholder-martian-lightgray text-white  focus:border-martian-red focus:outline-martian-red"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default withHelloLogger(Search);
