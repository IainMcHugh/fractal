import styled from 'styled-components';

type TButton = { svariant: 'PRIMARY' | 'SECONDARY' };
export const Button = styled.button<TButton>`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid
    ${({ svariant }) => (svariant === 'SECONDARY' ? '#FAFAFA' : '#3333BB')};
  background-color: ${({ svariant }) =>
    svariant === 'SECONDARY' ? '#3333BB' : '#FAFAFA'};
  color: ${({ svariant }) =>
    svariant === 'SECONDARY' ? '#FFFFFF' : '#3333BB'};
`;
