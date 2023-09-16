import { ChangeEvent, useState } from 'react';

export const useSearch = (initialValue: string = '') => {
  const [searchValue, setSearchValue] = useState<string>(initialValue);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return { searchValue, handleSearch };
};
