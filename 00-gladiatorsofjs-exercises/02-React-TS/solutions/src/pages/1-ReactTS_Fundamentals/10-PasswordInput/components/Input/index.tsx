import { InputItem, StyledInput } from "./Input.styles";

interface InputProps {
  index: number;
  type: string;
  disabled: boolean;
  onChange: (index: number, value: string) => void;
}

export const Input = ({ index, type, disabled, onChange }: InputProps) => {
  return (
    <InputItem>
      <StyledInput
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(index, e.target.value)
        }
        disabled={disabled}
        minLength={1}
        maxLength={1}
        required
      />
      <span>{index + 1}</span>
    </InputItem>
  );
};
