import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: ${p => p.theme.sizes[3]}px;
  margin: 0 auto;
  padding:  ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border-bottom: ${p => p.theme.borders.normal};
  
`;