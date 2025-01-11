import { useState } from 'react';

export const useCache = (maxSize) => {
  const [cache, setCache] = useState({});

  const addToCache = (key, data) => {
    const newCache = { ...cache, [key]: data };

    const cacheKeys = Object.keys(newCache);
    if (cacheKeys.length > maxSize) {
      const oldestKey = cacheKeys[0]; 
      delete newCache[oldestKey]; 
    }

    setCache(newCache);
  };

  const getFromCache = (key) => {
    return cache[key] || null;
  };

  return { cache, addToCache, getFromCache };
};