import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: ${p => p.theme.sizes[1]}px;
  margin: 10px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
`;

export const Image = styled.img`
  width: 190px;
  margin: 10px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.lightOrange};
`;

export const Name = styled.h3`
  margin: 0;
  font-size: ${p => p.theme.fontSizes.ml};
`;

export const Role = styled.h4`
  color: ${p => p.theme.colors.visited};
  font-size: ${p => p.theme.fontSizes.m};
  margin: 10px;
`;
