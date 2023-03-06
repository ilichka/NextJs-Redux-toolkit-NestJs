import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #__next {
        min-height: 100vh;
        font-family: Montserrat, sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
`;
