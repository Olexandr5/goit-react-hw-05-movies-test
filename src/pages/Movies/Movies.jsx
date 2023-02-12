import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/apiServicec';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    getMoviesByQuery(searchQuery)
      .then(setMovies)
      .finally(() => {
        setisLoading(false);
        setQuery(searchQuery);
      });
  }, [searchParams]);

  const handlerSubmit = evt => {
    evt.preventDefault();
    setisLoading(true);
    setSearchParams({ query });
  };
  const handlerChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <>
      {isLoading && <Loader />}
      <h1>Movies</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handlerChange}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};
export default Movies;
