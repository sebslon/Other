import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 1em;
  width: 400px;
`;

export const SearchForm = styled.form`
  padding: 0.5em;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  display: flex;

  button {
    border: none;
    background: none;
    cursor: pointer;

    img {
      height: 1em;
    }
  }

  input {
    width: 100%;
    border: none;
    background: none;
    color: #303030;
  }
`;
