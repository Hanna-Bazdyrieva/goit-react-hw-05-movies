import { Container, Image, Name, Role } from "./CustItem.styled";

const CastItem = ({actor}) => {
    return(
        <>
        <Container>
            <Image src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`: "http://placehold.it/190x285"} alt={actor.name} />
            <Name>{actor.name}</Name>
            <Role>{actor.character}</Role>
            </Container>
        </>
    )
  
}
export default CastItem
