import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary[900]};
  margin: auto;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 1000;

  a {
    color: ${({ theme }) => theme.colors.pink[300]};
    text-decoration: none;
  }
  h2 {
    font-family: ${({ theme }) => theme.fontFamily.avenirBold};
    font-size: ${({ theme }) => theme.fontSize?.hero};
    margin: 0;
    color: ${({ theme }) => theme.colors.pink[300]};
    line-height: 42px;
  }
  p {
    color: ${({ theme }) => theme.colors?.primary[200]};
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily.avenirRoman};
  }
  ${({ theme }) => theme.media?.tablet} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(40, 24)};
  }
  ${({ theme }) => theme.media?.mobile} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(40, 24)};
  }
`;

// ${({theme}) => theme.};
