import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0;
  border-top: var(--section_border);
  position: fixed;
  bottom: 0;
  margin-top: auto;
  z-index: 10;
  background-color: var(--twitter_primary);

  img {
    height: 1.8em;
    width: 1.8em;
  }

  @media ${breakpoints.tablet} {
    flex: 1;
    margin: 0 1em 0 0;
    position: static;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    border: none;

    img {
      margin: 0.7em;
    }
  }
`;

export const NavItem = styled.a`
  span {
    display: none;
  }
`;

export const TwitterLogo = styled.img`
  display: none;
  filter: invert(1);

  @media ${breakpoints.tablet} {
    display: block;
  }
`;

export const Feather = styled.a`
  background-color: var(--twitter_blue);
  border-radius: 50%;
  position: absolute;
  padding: 1em;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  bottom: 4em;
  right: 1em;

  :hover {
    opacity: 1;
  }

  @media ${breakpoints.tablet} {
    position: static;
    padding: 0;
  }
`;
