import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getMovieDetailsApi } from 'service/movieAPI';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetailsApi(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      {movie !== {} && (
        <div>
          <MovieDetailsCard movie={movie} />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
