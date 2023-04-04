import Box from "components/Box/Box";
import CastItem from "components/CastItem/CasItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastApi } from "service/movieAPI";



const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCastApi(movieId)
    .then((data) => {
      setCast(data.cast);
    })
    .catch((err) => console.log(err));
  
  }, [movieId]);


      return (
      <div>
        {cast !== [] && (<>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between" mx="10px" my="10px" >
          {cast.map((actor)=>{ 
          return( <CastItem key={actor.name} actor={actor}/>)})}
        </Box>
        </>)}
      </div>)
      
    };
    
    export default Cast

   

