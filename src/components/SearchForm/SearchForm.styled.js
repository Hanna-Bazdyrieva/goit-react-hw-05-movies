import styled from 'styled-components';


export const Title = styled.h1`
  margin: 0 auto ;
  text-align: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  text-decoration: underline;
  color: ${p => p.theme.colors.visited};
`;
export const StyledBar = styled.header`
margin: 0 auto;
width: 600px;
    display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.lightOrange};
  box-shadow: ${p => p.theme.shadows.normal};
  border-radius: ${p => p.theme.radii.normal};

`;

export const Form = styled.form`
margin : 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const ButtonSearch = styled.button`
  display: block;
  width: 60px;
  height: ${p => p.theme.sizes[5]}px;
  padding-top: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.l};
   border: 0;
  background-color:${p => p.theme.colors.section};
    opacity: 0.8;
  transition: background-color ${p => p.theme.transitions.cubic}, opacity ${p => p.theme.transitions.cubic};
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    box-shadow: ${p => p.theme.shadows.white};
    background-color:${p => p.theme.colors.orange};

  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: ${p => p.theme.sizes[5]}px;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  /* text-align: center; */
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[2]}px;
  /* box-shadow:  ${p => p.theme.shadows.inner}; */
;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;