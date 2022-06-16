import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HeadingWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => `0 ${theme.spacing.S24}`};
  margin-bottom: ${({ theme }) => theme.spacing.S12};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ theme }) => theme.spacing.S8};
`;

export const ListItem = styled.li``;

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
