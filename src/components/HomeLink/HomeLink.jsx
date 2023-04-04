import { LinkStyled } from "./HomeLink.styled";

const HomeLink = ({id, children}) => {
    console.log(children)
  return <LinkStyled  to={`movies/${id}`} >{children}</LinkStyled>
}

export default HomeLink
