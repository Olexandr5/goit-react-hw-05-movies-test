import { getTrendingMovies } from 'services/apiServicec';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </div>
  );
};
