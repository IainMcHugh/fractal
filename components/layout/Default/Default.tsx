import type { ReactNode } from 'react';
import styled from 'styled-components';

import { NavBar } from 'components/core/macro/NavBar/NavBar';
import { Header } from 'components/core/macro/Header/Header';

type TDefaultLayoutRenderProps = {
  NavBar: typeof NavBar;
  Body: typeof Body;
};

type TDefaultLayout = {
  children: (t: TDefaultLayoutRenderProps) => ReactNode;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
`;

const Body = styled.section`
  width: calc(100vw - 200px);
  margin-left: 200px;
  padding: 24px 48px;
`;

function DefaultLayout({ children }: TDefaultLayout) {
  return (
    <>
      <Header />
      <Wrapper>
        {children({
          NavBar,
          Body,
        })}
      </Wrapper>
    </>
  );
}

export { DefaultLayout };
