import { breakpoints } from "pages/TwitterClone/styles/breakpoints";
import styled from "styled-components";

export const SearchForm = styled.form`
  display: none;

  @media ${breakpoints.bigTablet} {
    display: flex;
    align-items: center;
    color: white;
    background-color: #555;
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