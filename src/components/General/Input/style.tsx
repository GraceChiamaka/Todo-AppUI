import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  input {
    width: 100%;
    height: ${({ theme }) => theme.spacing.button};
    padding: ${({ theme }) => theme.spacing.double(0, 16)};
    border: ${({ theme }) => theme.border.default};
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily.avenirRoman};
    font-size: ${({ theme }) => theme.fontSize.custom(0.9)};
  }
`;

// ${({theme}) => theme.};
