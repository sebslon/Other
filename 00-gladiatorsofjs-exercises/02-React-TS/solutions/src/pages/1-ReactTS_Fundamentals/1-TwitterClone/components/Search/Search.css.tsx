import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const SearchForm = styled.form`
  display: none;

  @media ${breakpoints.bigTablet} {
    display: flex;
    align-items: center;
    color: white;
    background-color: var(--twitter_gray);
    border-radius: 25px;
    padding: 0.5em 0.3em;
  }


  button, img, input {
    height: 1.5em;
    color: #fff;
    background: none;
    border: none;
  }
  
  input::placeholder {
    color: white;
  }
`;