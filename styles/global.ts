import { css } from 'styled-components/native';

export const globalStyles = css`
  * {
    font-family: ${({ theme }) => theme.fonts.poppins.regular};
    color: ${({ theme }) => theme.colors.black};
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;