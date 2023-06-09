import { lazy} from "react";
import { Route, Routes } from "react-router-dom";import Home from 'pages/HomePage';
// import Movies from 'pages/MoviesPage';
// import MovieDetails from 'pages/MovieDetailsPage';
// import Reviews from '../pages/ReviewsPage';
// import Cast from 'pages/CastPage';
import SharedLayout from '../components/SharedLayout';

const Movies = lazy(() => import("../pages/MoviesPage"));
const MovieDetails = lazy(() => import("../pages/MovieDetailsPage"));
const Reviews = lazy(() => import("../pages/ReviewsPage"));
const Cast = lazy(() => import("../pages/CastPage"));

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
