import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: ${p => p.theme.sizes[3]}px;
  margin: 10px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
`;

export const Name = styled.h3`
  margin: 0;
  color: ${p => p.theme.colors.visited};

  font-size: ${p => p.theme.fontSizes.ml};
`;

export const Text = styled.p`
  text-align: justify;

  font-size: ${p => p.theme.fontSizes.m};
  font-style: italic;
  margin: 10px;
`;
