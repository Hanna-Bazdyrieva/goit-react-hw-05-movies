import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { SiThemoviedatabase } from 'react-icons/si';
import { ImFilm } from 'react-icons/im';
import { IoHomeOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <IconContext.Provider
            value={{
              size: '50px',
              style: { verticalAlign: 'middle', padding: '2px 5px' },
            }}
          >
            <SiThemoviedatabase />
          </IconContext.Provider>
          {'    '}
          Movie Finder
        </Logo>
        <nav>
          <Link to="/" end>
            <IconContext.Provider
              value={{
                size: '30px',
                style: { verticalAlign: 'middle', padding: '2px 5px' },
              }}
            >
              <IoHomeOutline />
            </IconContext.Provider>
            {'    '}
            Home
          </Link>
          <Link to="/movies">
            <IconContext.Provider
              value={{
                size: '30px',
                style: { verticalAlign: 'middle', padding: '2px 5px' },
              }}
            >
              <ImFilm />
            </IconContext.Provider>
            {'    '}
            Movies
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
