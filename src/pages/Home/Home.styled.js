import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const List  = styled.ul`
list-style: none;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;

  
`;

export const Link = styled.a`

  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.bold};

  &.active {
    color: ${p => p.theme.colors.white};
    text-decoration: underline;
    background-color: ${p => p.theme.colors.orange};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.orange};
    text-decoration: underline;
  }
  /* :visited {
    color: ${p => p.theme.colors.visited}; */

  }
`;