import { Spin } from "antd";
import { FC } from "react";
import { ButtonContainer } from "./style";

type ButtonProps = {
  text: string;
  onClick?: (ev?: any) => void;
  variant: "primary" | "secondary";
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
};

export const Button: FC<ButtonProps> = ({
  text,
  variant,
  onClick,
  disabled = false,
  isLoading = false,
  loadingText,
}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} disabled={disabled}>
      <span>{text}</span>
      {isLoading && <Spin />}
    </ButtonContainer>
  );
};
