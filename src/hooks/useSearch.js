import { useState } from 'react';

export const useSearch = (onSearch) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      onSearch(query);
    }
  };

  return {
    query,
    setQuery,
    handleSearch,
  };
};