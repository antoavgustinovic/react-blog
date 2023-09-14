import { withHelloLogger } from '@/components/logger';

import { ReactComponent as MagnifyingGlassIcon } from './../../../public/assets/magnifying-glass-icon.svg';

interface SearchProps {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="relative w-full sm:w-1/2 md:w-2/4 lg:w-2/5 xl:w-2/6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon />
      </div>
      <input
        type="search"
        id="default-search"
        className="w-full p-4 pl-10 text-sm bg-transparent border rounded-xl  border-martian-lightgray placeholder-martian-lightgray text-white  focus:border-martian-red focus:outline-martian-red"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default withHelloLogger(Search);
