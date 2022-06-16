import type { ReactNode } from 'react';
import styled from 'styled-components';

type TNavBar = {
  children: ReactNode;
};

const Wrapper = styled.section`
  position: fixed;
  width: 200px;
  height: 100vh;
  padding: 8px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.OFFWHITE};
  border-right: ${({ theme }) => `1px solid ${theme.colors.GREY_LIGHT}`};
`;

function NavBar({ children }: TNavBar) {
  return <Wrapper>{children}</Wrapper>;
}

export { NavBar };
