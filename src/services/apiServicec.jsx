import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '11517d6931d2b5137dd13eb45c72b984';

export const getTrendingMovies = async () => {
  const resp = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
  return resp.data.results;
};

export const getMoviesByQuery = async query => {
  const resp = await axios.get(
    `/search/movie?&language=en-US&query=${query}&page=1&include_adult=false`,
    {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    }
  );
  return resp.data.results;
};

export const getMoviesDetailsPage = async id => {
  const resp = await axios.get(`movie/${id}language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data;
};
export const getMoviesCast = async id => {
  const resp = await axios.get(`movie/${id}/credits?&language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data.cast;
};
