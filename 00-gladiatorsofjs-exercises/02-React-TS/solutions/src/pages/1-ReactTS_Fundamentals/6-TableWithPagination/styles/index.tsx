import styled from "styled-components";

export const Table = styled.div`
  width: 95%;
  margin: 1em auto;

  @media (min-width: 1000px) {
    width: 800px;
  }
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-top: solid 1px #005500;
  border-left: solid 1px #005500;
  border-radius: 50%;
  animation: rotation 0.3s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
