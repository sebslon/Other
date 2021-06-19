import styled from "styled-components";

const StyledNavbar = styled.nav`
  background: black;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 50px;
  z-index: 999;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  li {
    margin: 0px 20px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export { StyledNavbar, StyledList };
