import styled from "styled-components";

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.custom(24)};
  p {
    font-family: ${({ theme }) => theme.fontFamily.avenir};
  }
  a {
    color: ${({ theme }) => theme.colors.primary[400]};
    font-family: ${({ theme }) => theme.fontFamily.avenirRoman};
    text-decoration: none;
  }
`;

export const FormBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const FormLink = styled.p`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary[300]};
  }
`;

// ${({theme}) =>theme.};
