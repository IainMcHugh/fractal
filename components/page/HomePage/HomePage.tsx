import styled from 'styled-components';

import type { TItems } from 'pages';
// TODO: should not be importing type from core;
import type { TTextCardHeadings } from 'components/core/macro/TextCardList/TextCardList';
import { Button } from 'components/core/micro/Button/Button';
import { DefaultLayout } from 'components/layout/Default/Default';
import { TextCardList } from 'components/core/macro/TextCardList/TextCardList';

type THomePage = {
  headings: TTextCardHeadings;
  items: TItems[];
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.S24};
`;

const H1 = styled.h1`
  ${({ theme }) => theme.spacing.S3636};
  font-weight: ${({ theme }) => theme.fontWeight.NORMAL};
`;

function HomePage({ headings, items }: THomePage) {
  return (
    <DefaultLayout>
      {({ NavBar, Body }) => (
        <>
          <NavBar>I am Navbar</NavBar>
          <Body>
            <TitleWrapper>
              <H1>Project A - User Requirements</H1>
              <Button>Create+</Button>
            </TitleWrapper>
            <TextCardList headings={headings} items={items} />
          </Body>
        </>
      )}
    </DefaultLayout>
  );
}

export { HomePage };
