import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
        --twitter_primary: #15202b;
        --twitter_blue: #1DA1F2;
        --text_white: #fff;
        --border-color: #3d5466; 

        --section_border: solid 2px var(--border-color);
  }

  body {
        margin: 0;
        color: var(--text_white);
        background-color: var(--twitter_primary);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;