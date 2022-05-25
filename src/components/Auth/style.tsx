import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 150px);
  align-items: center;
`;

export const AuthContainer = styled.div`
  width: 40%;
  border: ${({ theme }) => theme.border.default};
  padding: ${({ theme }) => theme.spacing.double(40, 0)};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.custom(1.4)};
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.avenirRoman};
  }
  form {
    margin: auto;
    margin-top: 44px;
    width: 70%;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.custom(24)};
`;

// ${({theme}) =>theme.};
