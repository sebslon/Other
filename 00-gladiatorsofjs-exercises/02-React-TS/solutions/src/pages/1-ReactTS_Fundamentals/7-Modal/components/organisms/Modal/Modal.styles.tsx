import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  overflow-y: auto;
  max-height: 550px;
  width: 85%;
  padding: 1rem;
  z-index: 15;

  @media (min-width: 800px) {
    width: 550px;
  }
`;
