import styled from "styled-components";
import { Link } from "react-router-dom";

export const MultistepFormsContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 1px;
  margin: 1em 0.5em;
  padding: 13px 50px 13px;
  color: black;
  max-width: 300px;
  min-width: 250px;
  border: 1px solid black;
  position: relative;
  user-select: none;
  touch-action: manipulation;

  &::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }
`;

export const FullVWContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
`;
