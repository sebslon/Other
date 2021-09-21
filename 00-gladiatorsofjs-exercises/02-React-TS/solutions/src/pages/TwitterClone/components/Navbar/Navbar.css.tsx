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
      margin: 0.4em;
    }
  }

  @media ${breakpoints.desktop} {
    align-items: flex-start;
    margin: 0 2rem;
  }
`;

export const NavItem = styled.a`
  margin: 0.2em 0;
  text-decoration: none;

  span {
    display: none;
    font-weight: bold;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    align-items: center;

    span {
      display: block;
      color: white;
      font-size: 1.1em;
    }
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

  p {
    display: none;
  }

  @media ${breakpoints.tablet} {
    margin-top: 0.5em;
    position: static;
    padding: 0;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
    border-radius: 25px;
    text-align: center;

    img {
      display: none;
    }

    p {
      display: block;
      font-weight: bold;
      letter-spacing: 1.2px;
    }
  }
`;
