import { useCallback, useState } from "react";
import styled from "styled-components";
import { usePassword } from "../../hooks/usePassword";
import { Input } from "../Input";

interface PasswordInputProps {
  password: string;
  onSuccess: () => void;
}

export const PasswordInput = ({ password, onSuccess }: PasswordInputProps) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const { state } = usePassword(password, onSuccess);
  const { allInputs, randomIndexes } = state;

  const handleToggleCheckbox = useCallback(
    () => setIsPasswordHidden((isHidden) => !isHidden),
    []
  );

  return (
    <form>
      <InputsList>
        {allInputs.map((input, index) => (
          <Input
            key={index}
            disabled={!randomIndexes.includes(index)}
            index={index}
            type={isPasswordHidden ? "password" : "text"}
          />
        ))}
      </InputsList>
      <label>
        Hide password
        <input
          type="checkbox"
          checked={isPasswordHidden}
          onChange={handleToggleCheckbox}
        />
      </label>
    </form>
  );
};

const InputsList = styled.ul`
  display: flex;
  padding: 0;
`;
