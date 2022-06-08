import { FC } from "react";
import { Input } from "antd";
import { InputContainer } from "./style";

type InputProps = {
  type?: string;
  onChange?: (ev?: any) => void;
  value?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
};

export const CustomInput: FC<InputProps> = ({
  type,
  onChange,
  value,
  placeholder,
  required = false,
  name,
}) => {
  return type === "password" ? (
    <InputContainer>
      <Input.Password
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        name={name}
      />
    </InputContainer>
  ) : (
    <InputContainer>
      <Input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        name={name}
      />
    </InputContainer>
  );
};
