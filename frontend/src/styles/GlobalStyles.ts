import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyles;

export const StyledFilterWrapper = styled.div`
    width: 100%;
    padding: 1rem 10rem;
`