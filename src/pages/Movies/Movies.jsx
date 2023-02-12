import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/apiServicec';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    getMoviesByQuery(searchQuery).then(setMovies);
  }, [searchParams]);

  const handlerSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query });
  };
  const handlerChange = evt => {
    setQuery(evt.target.value);
  };

  return (
    <>
      <h1>Movies</h1>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="query" onChange={handlerChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};
