import Box from '../components/Box';
import Review from '../components/Review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsApi } from 'service/movieAPI';
import ErrorStyled from '../components/ErrorStyled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('')
    getMovieReviewsApi(movieId)
      .then(data => {
        if (data.results.length === 0) {
          throw new Error('OOPS... No Reviews so far...Sorry..');
            }
        setReviews(data.results);
      })
      .catch(err => setError(err.message)
    );
  }, [movieId]);

  return (
    <Box px="20px" py="20px">
       {error && <ErrorStyled>{error}</ErrorStyled>}
      {/* {reviews !== [] && ( */}
        <Box display="flex" flexWrap="wrap" mx="10px" my="10px">
          {reviews.map(review => {
            return <Review key={review.id} review={review} />;
          })}
        </Box>
      {/* )} */}
    </Box>
  );
};

export default Reviews;
