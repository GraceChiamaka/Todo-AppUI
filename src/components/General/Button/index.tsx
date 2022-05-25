import { FC } from "react";
import { ButtonContainer } from "./style";

type ButtonProps = {
  text: string;
  onClick?: (ev?: any) => void;
  variant: "primary" | "secondary";
};

export const Button: FC<ButtonProps> = ({ text, variant, onClick }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      <span>{text}</span>
    </ButtonContainer>
  );
};
