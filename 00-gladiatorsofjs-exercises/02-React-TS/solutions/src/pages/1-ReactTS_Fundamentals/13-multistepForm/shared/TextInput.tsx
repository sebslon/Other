import styled from "styled-components";

interface TextInputProps {
  inputName: string;
  labelText: string;
}

export const TextInput = ({ inputName, labelText }: TextInputProps) => {
  return (
    <InputContainer>
      <StyledInput type="text" name={inputName} />
      <label htmlFor={inputName}>{labelText}</label>
    </InputContainer>
  );
};

// ---------------------------------------------------------------- STYLED COMPONENTS

const primary = "#11998e";
const secondary = "#38ef7d";
const white = "#fff";
const gray = "#9b9b9b";

const InputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: ${white};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    & ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${primary};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, ${primary}, ${secondary});
    border-image-slice: 1;
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
  cursor: text;
  top: 20px;

  position: absolute;
  /* top: 0; */
  display: block;
  transition: 0.2s;
  /* font-size: 1rem; */
  color: ${gray};
`;
