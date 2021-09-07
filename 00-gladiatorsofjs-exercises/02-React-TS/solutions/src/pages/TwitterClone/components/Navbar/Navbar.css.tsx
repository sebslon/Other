import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 0.5em 0;
  border-top: var(--section_border);
  position: sticky;
  bottom: 0;
  background-color: var(--twitter_primary);
`;

export const NavItem = styled.a`
  img {
    height: 2em;
    width: 25%;
  }

  span {
    display: none;
  }
`;

export const TwitterLogo = styled.img`
  display: none;

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
`;
