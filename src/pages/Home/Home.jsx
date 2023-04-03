import {getTrendingdMoviesApi} from '../../service/movieAPI'
import { useEffect, useState } from 'react';
import {List, Link} from './Home.styled'


const Home = params => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const changeMovies = async () => {
    // setIsLoading(true);
    // setError(null);
    // setIsLastPage(false);

    try {
      const data = await getTrendingdMoviesApi();

      console.log(data.results)

      if (data.results.length === 0) {
        throw new Error('OOPS... We found nothing... Sorry..');
      }

      // const lastPage = Math.ceil(data.totalHits / 12);

      // if (lastPage === page) {
      //   setIsLastPage(true);
      // }
      setMovies([...data.results])

      // page === 1 ? setImages(data.hits) : setImages([...images, ...data.hits]);
    } catch (error) {
      // setError(error.message);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    changeMovies()
  
 }, []);
// console.log(changeMovies())
  return (
    <>
      <div>
      {/* {isLoading && <h2>Loading</h2>} */}
        <h1>Today's Trends</h1>
        <List>
          {movies.map(({title, id})=> <li key={id}><Link href="#">{title}</Link></li>)}
          
          </List>
      </div>
    </>
  );
};

export default Home