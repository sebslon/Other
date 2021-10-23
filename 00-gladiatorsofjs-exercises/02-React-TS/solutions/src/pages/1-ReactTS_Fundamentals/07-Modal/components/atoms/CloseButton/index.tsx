import styled from "styled-components";

export const CloseButton = styled.button`
  border: none;
  box-shadow: 0 0 2px #000;
  border-radius: 5px;
  padding: 0.4em 0.8em;
  cursor: pointer;

  transition-property: color, background-color;
  transition-duration: 0.2s;

  &:hover {
    color: white;
    background-color: #821313;
  }
`;
