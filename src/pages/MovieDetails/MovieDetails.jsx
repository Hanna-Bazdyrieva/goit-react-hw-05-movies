import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <div>
      <h1> Movie {movieId} Datails</h1>
      <ul>
        <li>
          <Link to="cast">Read about our mission</Link>
        </li>
        <li>
          <Link to="reviews">Get to know the team</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
