import styled from "styled-components";

const BookContainer = styled.div`
  padding: 10px 0px;
  width: 24%;
  border: 1px solid black;
  position: relative;
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

const DeletingModeBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  p {
    font-size: 0.8rem;
  }
`;

export { DeletingModeBox, BookContainer, BookDetails, BookWrapper };
