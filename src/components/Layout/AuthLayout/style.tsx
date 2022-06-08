import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.double(60, 40)};
  margin-top: 110px;
`;

export const AuthContainer = styled.div`
  border: ${({ theme }) => theme.border.default};
  padding: ${({ theme }) => theme.spacing.double(40, 40)};

  h3 {
    font-size: ${({ theme }) => theme.fontSize.custom(1.4)};
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.avenirRoman};
    margin: 0;
  }
`;
