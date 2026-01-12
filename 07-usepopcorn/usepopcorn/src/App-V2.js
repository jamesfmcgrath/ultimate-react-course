import { useEffect, useState } from 'react';
import Box from './components/Box.js';
import ErrorMessage from './components/ErrorMessage.js';
import Loader from './components/Loader.js';
import Main from './components/Main.js';
import MovieDetails from './components/MovieDetails.js';
import MoviesList from './components/MoviesList.js';
import NavBar from './components/NavBar.js';
import NumResults from './components/NumResults.js';
import Search from './components/Search.js';
import WatchedMoviesList from './components/WatchedMoviesList.js';
import WatchedSummary from './components/WatchedSummary.js';

const KEY = 'fd1143fc';

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedID, setSelectedID] = useState(null);

  function handleSelectMovie(id) {
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseMovie() {
    setSelectedID(null);
  }

  function handleAddWatch(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  console.log(movies);
  // TO DO: Convert to an event handler
  // Data is not needed until a search is performed.
  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        // When I place this here I get undefined when calling the variable.
        // My mistake. Calling inside the function. DOH!
        // const controller = new AbortController();

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

      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatch}
              watched={watched}
              KEY={KEY}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
