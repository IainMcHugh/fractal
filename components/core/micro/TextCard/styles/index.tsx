import styled from 'styled-components';

import { STATUS } from 'constants/index';

type TWrapper = { variant: STATUS; itemCount: number };
export const Wrapper = styled.div<TWrapper>`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing.S12} ${theme.spacing.S24}`};
  border-radius: ${({ theme }) => theme.rounding.S2};
  ${({ theme, variant }) => {
    switch (variant) {
      case STATUS.PASSING:
        return `
        background-color: ${theme.colors.GREEN_LIGHT};
        border: 1px solid ${theme.colors.GREEN};
        `;
      case STATUS.PARTIAL:
        return `
        background-color: ${theme.colors.YELLOW_LIGHT};
        border: 1px solid ${theme.colors.YELLOW};
        `;
      case STATUS.FAILING:
        return `
        background-color: ${theme.colors.RED_LIGHT};
        border: 1px solid ${theme.colors.RED};
        `;
      case STATUS.DEFAULT:
        return `
        background-color: ${theme.colors.OFFWHITE};
        border: 1px solid ${theme.colors.GREY_LIGHT};
        `;
      default:
        return `
        background-color: ${theme.colors.OFFWHITE};
        border: 1px solid ${theme.colors.GREY_LIGHT};
        `;
    }
  }};
`;

export const IDText = styled.p<TText>`
  ${({ theme }) => theme.font.S2024}
  color: ${({ theme }) => theme.colors.OFFBLACK};
  width: 100px;
`;

export const DescriptionText = styled.p<TText>`
  ${({ theme }) => theme.font.S2024}
  color: ${({ theme }) => theme.colors.OFFBLACK};
  width: 500px;
`;

export const Items = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
`;

type TText = { wide?: boolean };
export const Text = styled.p<TText>`
  ${({ theme }) => theme.font.S2024}
  color: ${({ theme }) => theme.colors.OFFBLACK};
`;
