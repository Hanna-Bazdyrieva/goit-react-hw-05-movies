import {
  Container,
  Wrapper,
  Span,
  SubTitle,
  Title,
  Text,
  Link,
  SubHeader,
  Image,
} from './MovieDetailsCard.styled';
import { useEffect, useState } from 'react';
import Box from 'components/Box/Box';

const MovieDetailsCard = ({ movie }) => {
  const [film, setFilm] = useState(movie);
  useEffect(() => {
    setFilm({ ...movie });
  }, [movie]);

  return (
    <>
      <Wrapper>
        <Image
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
              : 'http://placehold.it/190x285'
          }
          alt={film.title}
        />
        <Container>
          <Title>{film.title}</Title>
          <Box display="flex" justifyContent="space-between" width="600px">
            <SubTitle>
              Released <Span>{film.release_date}</Span>
            </SubTitle>
            <SubTitle>
              User rating <Span>{film.vote_average}</Span>
            </SubTitle>
            <SubTitle>
              Revenew <Span>${film.revenue?.toLocaleString()}</Span>
            </SubTitle>
          </Box>

          <Text>{film.overview}</Text>
        </Container>
      </Wrapper>

      <Container>
        <SubHeader>Additional Information</SubHeader>
        <Link to="cast">CAST</Link>
        <Link to="reviews">REVIEWS</Link>
      </Container>
    </>
  );
};
export default MovieDetailsCard;
