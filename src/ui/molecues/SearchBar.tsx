'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const SearchBar = () => {
  const router = useRouter();
  const [touched, setTouched] = useState(false);
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (touched) {
      console.log('Searching for:', encodeURIComponent(query));

      router.push(`/search?query=${encodeURIComponent(query)}`);
    } else {
      setTouched(true);
    }
  };

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => {
      clearTimeout(typingTimer);
    };
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for items"
      />
    </div>
  );
};
