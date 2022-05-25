import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: ${({ theme }) => theme.spacing.button};
    padding: ${({ theme }) => theme.spacing.double(0, 16)};
    border: ${({ theme }) => theme.border.default};
    outline: none;
  }
`;

// ${({theme}) => theme.};
