import { getTrendingdMoviesApi } from '../service/movieAPI';
import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import Container from '../components/Container';
import { useLocation } from 'react-router-dom';
import ErrorStyled from '../components/ErrorStyled'

const Home = params => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  const changeMovies = async () => {
    try {
      const data = await getTrendingdMoviesApi();
      if (data.results.length === 0) {
        throw new Error('OOPS... We found nothing... Sorry..');
      }
      setMovies([...data.results]);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    changeMovies();
  }, []);

  return (
    <>
      <Container>
        {error && <ErrorStyled>{error}</ErrorStyled>}
        <MovieList
          title="Today's Trends"
          movies={movies}
          needMovies={true}
          location={location}
        />
      </Container>
    </>
  );
};

export default Home;
