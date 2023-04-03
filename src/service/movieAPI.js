import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3fa79295b2db659311fd6571a0276ef1';

export const getTrendingdMoviesApi = () => {
  return axios
    .get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getMovieSearchApi = query => {
  return axios
    .get('search/movie', {
      params: {
        query,
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getMovieDetailsApi = id => {
  return axios
    .get(`movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getMovieCastApi = id => {
    return axios
      .get(`movie/${id}/credits`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(res => res.data);
  };

  export const getMovieReviewsApi = id => {
    return axios
      .get(`movie/${id}/reviews`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then(res => res.data);
  };


