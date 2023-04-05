import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearchApi } from 'service/movieAPI';
import MovieList from '../components/MovieList';
import ErrorStyled from '../components/ErrorStyled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    setMovies([])
    setError('')
    if (!query) return;
    
    getMovieSearchApi(query)
      .then(data => {
        if (data.results.length === 0) {
          throw new Error('OOPS... Nothing Found... Sorry..');
        }
        setMovies(data.results);
      })
      .catch(error => setError(error.message));
  }, [query, searchParams]);

  return (
    <>
      <div>
        <SearchForm />
        {error && <ErrorStyled>{error}</ErrorStyled>}
        {query && <MovieList movies={movies} location={location} />}
      </div>
    </>
  );
};

export default Movies;
