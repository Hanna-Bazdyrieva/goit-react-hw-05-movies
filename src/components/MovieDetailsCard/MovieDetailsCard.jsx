import {
  Container,
  Wrapper,
  Span,
  SubTitle,
  Title,
  Text,
  LinkNav,
  SubHeader,
  Image,
  LinkBack,
} from './MovieDetailsCard.styled';
import { useEffect, useRef, useState } from 'react';
import Box from 'components/Box/Box';
import { useLocation } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { IconContext } from 'react-icons';

const MovieDetailsCard = ({ movie }) => {
  const location = useLocation();
  const savedNavigate = useRef(location.state?.from);

  const [film, setFilm] = useState(movie);
  useEffect(() => {
    setFilm({ ...movie });
  }, [movie]);

  return (
    <>
      <LinkBack
        to={savedNavigate.current ?? '/movies'}
        state={{ from: location }}
      >
        <IconContext.Provider
          value={{
            size: '30px',
            style: { verticalAlign: 'middle', padding: '2px 5px' },
          }}
        >
          <IoMdArrowRoundBack />
        </IconContext.Provider>
      </LinkBack>
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
        <LinkNav to="cast">CAST</LinkNav>
        <LinkNav to="reviews">REVIEWS</LinkNav>
      </Container>
    </>
  );
};
export default MovieDetailsCard;
