import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: ${p => p.theme.sizes[3]}px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.container};
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: ${p => p.theme.space[3]}px 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  border-bottom: 6px double black;

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
