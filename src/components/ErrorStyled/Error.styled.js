import styled from 'styled-components';

export const Message = styled.h1`
  margin: 0 ;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  text-decoration: underline;
  color: ${p => p.theme.colors.visited};
`;