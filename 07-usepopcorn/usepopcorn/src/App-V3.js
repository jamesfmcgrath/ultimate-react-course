import { useState } from 'react';
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
import { useLocalStorageState } from './hooks/useLocalStorageState.js';
import { useMovies } from './hooks/useMovies.js';

const KEY = 'fd1143fc';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedID, setSelectedID] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], 'watched');

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
