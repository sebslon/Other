import styled from "styled-components";

export const Input = (props: any) => {
  return (
    <InputItem>
      <StyledInput
        type={props.type}
        disabled={props.disabled}
        minLength={1}
        maxLength={1}
      />
      <span>{props.index + 1}</span>
    </InputItem>
  );
};

const StyledInput = styled.input<any>`
  width: 1.5em;
  height: 2.5em;
  margin: 0 0.2em;
  text-align: center;
`;

const InputItem = styled.li`
  display: grid;
  justify-items: center;
`;
