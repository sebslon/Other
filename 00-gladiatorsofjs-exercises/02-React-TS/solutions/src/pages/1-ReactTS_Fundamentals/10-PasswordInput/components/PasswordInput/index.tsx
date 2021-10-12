import { useState } from "react";

import { Checkbox, InputsList, PasswordHint, StyledForm } from "./PasswordInput.styles";

import { usePassword } from "../../hooks/usePassword";

import { Input } from "../Input";

interface PasswordInputProps {
  password: string;
  onSuccess: () => void;
}

export const PasswordInput = ({ password, onSuccess }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { state, inputChangeHandler } = usePassword(password, onSuccess);
  
  const { allInputs, passwordIndexes, message } = state;

  const handleToggleCheckbox = () => {
    setIsPasswordVisible((isHidden) => !isHidden);
  };

  return (
    <StyledForm>
      <InputsList>
        {allInputs.map((input, index) => (
          <Input
            key={index}
            index={index}
            disabled={!passwordIndexes.includes(index)}
            onChange={inputChangeHandler}
            type={isPasswordVisible ? "text" : "password"}
          />
        ))}
      </InputsList>

      <label>
        <Checkbox
          type="checkbox"
          checked={isPasswordVisible}
          onChange={handleToggleCheckbox}
        />
        Show password
      </label>

      {message ? <p>{message}</p> : null}

      <PasswordHint>
        <span>HINT! </span>Try typing in: {password}
      </PasswordHint>
    </StyledForm>
  );
};
