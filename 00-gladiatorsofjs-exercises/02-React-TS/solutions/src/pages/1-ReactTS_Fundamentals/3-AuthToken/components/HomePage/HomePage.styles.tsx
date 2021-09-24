import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
  height: 100vh;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 200%
  );

  a {
    color: black;
    text-decoration: none;
    transition: font-size 0.5s ease;
    :hover {
      font-size: 3.5rem;
    }
  }
`;
