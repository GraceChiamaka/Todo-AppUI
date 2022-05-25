import { FC } from "react";
import { InputContainer } from "./style";

type InputProps = {
  type?: string;
  onChange?: () => void;
  value?: string;
  placeholder?: string;
  required?: boolean;
};

export const Input: FC<InputProps> = ({
  type,
  onChange,
  value,
  placeholder,
  required = false,
}) => {
  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
      />
    </InputContainer>
  );
};
