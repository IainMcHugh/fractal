import styled from 'styled-components';

type TWrapper = { bgColor: string };
export const Wrapper = styled.div<TWrapper>`
  padding: 4px 12px;
  border-radius: 8px;
  background-color: ${({ bgColor }) => `${bgColor}bb`};
  border: 2px solid #000000bb;
`;

type TText = { textColor: string };
export const Text = styled.p<TText>`
  font-size: 16px;
  line-height: 18px;
  color: ${({ textColor }) => textColor};
`;
