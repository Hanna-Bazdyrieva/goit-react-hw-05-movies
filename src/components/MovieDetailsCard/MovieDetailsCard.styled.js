import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: ${p => p.theme.sizes[3]}px;
  margin: 0 auto;
  padding:  ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border-bottom: ${p => p.theme.borders.normal};
  
`;
export const Wrapper = styled(Container)`
display flex;
border-bottom: ${p => p.theme.borders.normal};

  
`;

export const Image = styled.img`
  width: 190px;
  margin: 10px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.lightOrange};
`;


export const Title = styled.h1`
  margin: 0 ;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  text-decoration: underline;
  color: ${p => p.theme.colors.visited};
`;

export const SubTitle = styled.h2`
display:flex;
flex-direction: column;
  margin: 10px ;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const SubHeader = styled(SubTitle)`
  font-size: ${p => p.theme.fontSizes.ml};
  margin: 0 0 ${p => p.theme.space[4]}px ;


`

export const Span = styled.span`
 font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.visited};

`;

export const Text = styled.p`
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};

  > nav {
    display: flex;
    margin-left: ${p => p.theme.space[6]}px;
  }
`;

export const Logo = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.ml};
  margin: 0;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.lightOrange};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;

  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.orange};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.orange};
  }
`;
