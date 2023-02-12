import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiServicec';
import { BASE_IMG_URL } from 'services/constants';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMoviesCast(id).then(setCast);
  }, []);

  return (
    <>
      <h1>Cast</h1>;
      {cast.map(person => (
        <>
          <img src={BASE_IMG_URL + person.profile_path} alt={person.name} />
          <p>{person.name}</p>
        </>
      ))}
    </>
  );
};
