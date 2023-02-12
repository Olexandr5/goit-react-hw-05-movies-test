import { useState, useEffect } from 'react';
import { getMoviesDetailsPage } from 'services/apiServicec';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { BASE_IMG_URL } from 'services/constants';

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const hendleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMoviesDetailsPage(id).then(setDetails);
  }, [id]);

  if (!details) {
    return null;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
      }}
    >
      <h1>{details.title}</h1>
      <button type="button" onClick={hendleGoBack}>
        Go back
      </button>
      <img
        src={BASE_IMG_URL + details.poster_path}
        alt={details.title}
        width="400"
      />
      <NavLink to="cast" state={{ from: location.state.from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location.state.from }}>
        Reviews
      </NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
