import styled from 'styled-components';

export const TwitterLogo = styled.img`
  display: none;
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 0.5em 0;
  position: absolute;
  border-top: var(--section_border);
  bottom: 0;
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