import {getTrendingdMoviesApi} from '../service/movieAPI'
import { useEffect, useState } from 'react';
import { LinkStyled, List } from 'components/HomeLink/HomeLink.styled';
import { Title, Container } from 'components/MovieDetailsCard/MovieDetailsCard.styled';

const Home = params => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  
  const changeMovies = async () => {
    // setIsLoading(true);
    // setError(null);
    // setIsLastPage(false);

    try {
      const data = await getTrendingdMoviesApi();
      if (data.results.length === 0) {
        throw new Error('OOPS... We found nothing... Sorry..');
      }

     setMovies([...data.results])

    } catch (error) {
      // setError(error.message);
      console.log(error)
    } 
  };

  useEffect(() => {
    changeMovies()
  
 }, []);
  return (
    <>
      <Container>
      {/* {isLoading && <h2>Loading</h2>} */}
        <Title>Today's Trends</Title>
        <List>
          {movies.map(({title, id})=> <LinkStyled key={id} to={`movies/${id}`} >{title}</LinkStyled>)}
          
          </List>
      </Container>
    </>
  );
};

export default Home