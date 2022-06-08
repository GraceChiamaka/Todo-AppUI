import styled from "styled-components";

const applyBackgroundColor = (type: string, colors: any) => {
  return type === "primary" ? colors.primary[900] : colors.primary[200];
};
const applyColor = (type: string, colors: any) => {
  return type === "primary" ? colors.white : colors.white;
};

export const ButtonContainer = styled.button<{
  variant: "primary" | "secondary";
}>`
  background: ${({ theme, variant }) =>
    applyBackgroundColor(variant, theme.colors)};
  color: ${({ theme, variant }) => applyColor(variant, theme.colors)};
  height: ${({ theme }) => theme.spacing.button};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-family: ${({ theme }) => theme.fontFamily.avenir};
  border: none;
  width: 100%;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  cursor: pointer;
  gap: 5px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .ant-spin-spinning {
    .ant-spin-dot-spin {
      width: 12px;
      height: 12px;
      .ant-spin-dot-item {
        background-color: ${({ theme }) => theme.colors.pink[300]};
        width: 6px;
        height: 6px;
      }
    }
  }
`;

// ${({theme}) => theme.};
