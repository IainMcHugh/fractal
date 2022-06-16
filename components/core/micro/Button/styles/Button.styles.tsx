import styled from 'styled-components';

type TButton = { svariant: 'PRIMARY' | 'SECONDARY' };
export const Button = styled.button<TButton>`
  ${({ theme }) => theme.font.S2424}
  max-height: 40px;
  padding: ${({ theme }) => `${theme.spacing.S8} ${theme.spacing.S36}`};
  border-radius: ${({ theme }) => theme.rounding.S2};
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  border: none;
  outline: none;
  cursor: pointer;
`;
