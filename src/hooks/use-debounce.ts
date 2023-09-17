import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number, callback?: () => void) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    if (debouncedValue) {
      callback && callback();
    }
  }, [callback, debouncedValue]);

  return debouncedValue;
};
