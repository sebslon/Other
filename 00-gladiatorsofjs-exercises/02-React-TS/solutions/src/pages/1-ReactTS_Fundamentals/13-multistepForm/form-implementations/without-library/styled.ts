import styled from "styled-components";
import { Button } from "@mui/material";

export const Form = styled.form`
  width: 90%;
  border-radius: 15px;
  padding: 1em 2em;
  max-width: 400px;
  border: solid 1px #000;
  background-color: #fff;
  box-shadow: 5px 5px 8px 0px #000;
`;

export const FormTitle = styled.h1``;

export const ButtonNavigation = styled.div`
  padding: 1em 0;
  display: flex;
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 2em;
    border-color: #000;
    &:hover {
      border-color: #000;
    }
    color: #000;
  }
`;

export const NextButton = styled(StyledButton)`
  && {
    margin-left: auto;
  }
`;
export const PrevButton = styled(StyledButton)``;
