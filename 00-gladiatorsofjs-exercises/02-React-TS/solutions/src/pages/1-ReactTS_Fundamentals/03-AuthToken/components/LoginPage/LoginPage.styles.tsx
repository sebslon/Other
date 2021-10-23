import styled from "styled-components";

export const LoginPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 200%
  );

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0px 2px 15px 0px rgba(66, 68, 90, 1);

    a {
      color: #000;
      text-decoration: none;
    }
  }
`;
