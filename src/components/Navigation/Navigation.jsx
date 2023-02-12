import { NavLink } from 'react-router-dom';
export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};
