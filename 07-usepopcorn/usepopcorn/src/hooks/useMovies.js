import { useEffect, useState } from 'react';

const KEY = 'fd1143fc';

// Use names export for custom hooks
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          // This error does not get displayed.
          // Rather the standard error of 'Failed to fetch' is displayed
          // Why?
          if (!res.ok)
            throw new Error('Something went wrong with fetch movies!');

          const data = await res.json();

          if (data.Response === 'False') throw new Error('Movie not found!');

          setMovies(data.Search);
          setError('');
        } catch (err) {
          setError(err.message);

          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError('');
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
