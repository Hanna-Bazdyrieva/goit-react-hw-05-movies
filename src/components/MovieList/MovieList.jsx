import { LinkStyled, List, Title } from './MovieList.styled';

const MovieList = ({ title, movies, needMovies, location }) => {

  return (
    <>
      {title && <Title>{title}</Title>}
      <List>
        {movies.map(({ title, id }) => (
          <LinkStyled key={id} to={needMovies?`movies/${id}`:`${id}`} state={{from:location}}>
            {title}
          </LinkStyled>
        ))}
      </List>
    </>
  );
};

export default MovieList;


