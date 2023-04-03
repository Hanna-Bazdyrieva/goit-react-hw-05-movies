import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Reviews from '../pages/Reviews';
import Cast from '../pages/Cast';
import SharedLayout from '../components/SharedLayout';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
