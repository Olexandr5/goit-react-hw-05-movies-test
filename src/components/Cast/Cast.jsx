import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/apiServicec';
import { BASE_IMG_URL } from 'services/constants';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMoviesCast(id).then(setCast);
  }, [id]);

  return (
    <>
      <h1>Cast</h1>;
      {cast.map(person => (
        <ul key={person.id}>
          <img src={BASE_IMG_URL + person.profile_path} alt={person.name} />
          <p>{person.name}</p>
        </ul>
      ))}
    </>
  );
};
export default Cast;
