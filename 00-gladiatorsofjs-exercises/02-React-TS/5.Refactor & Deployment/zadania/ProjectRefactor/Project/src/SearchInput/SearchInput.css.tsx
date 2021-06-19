import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  padding: 20px;
  border-radius: 25px 0px 0px 25px;
  border: none;
  outline: none;
  width: 275px;
`;

const StyledButton = styled.button`
  padding: 13px;
  width: 75px;
  border: none;
  border-radius: 0px 25px 25px 0px;
  cursor: pointer;
  outline: none;
  background-color: #2196f3;

  &:hover {
    background-color: #21bdf3;
  }
`;

export { SearchContainer, StyledInput, StyledButton };
