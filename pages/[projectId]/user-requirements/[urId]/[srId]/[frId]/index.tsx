import type { NextPage } from 'next';

import { STATUS } from 'constants/index';
import { HomePage } from 'components/page/HomePage/HomePage';

// TODO: Should not be importing type from core
import type { TTextCardHeadings } from 'components/core/macro/TextCardList/TextCardList';

export type TItems = {
  id: string;
  description: string;
  items: string[];
  variant?: STATUS;
  url: string;
};

const Home: NextPage = () => {
  const headings: TTextCardHeadings = {
    id: 'ID',
    description: 'Description',
    items: ['Sys Req', 'Fun Req', 'Status'],
  };
  const items: TItems[] = [
    {
      id: 'SPEC-1',
      description: 'As a user, I want to be able to place an ad quickly',
      items: ['50', '200', '100%'],
      variant: STATUS.PASSING,
      url: '/UR-1',
    },
    {
      id: 'SPEC-2',
      description: 'As a user, I want my ad to be descriptive of my product',
      items: ['50', '200', '40%'],
      variant: STATUS.PARTIAL,
      url: '/UR-1',
    },
    {
      id: 'SPEC-3',
      description: 'As a user, I want clear pricing brackets for my ad',
      items: ['50', '200', '80%'],
      variant: STATUS.FAILING,
      url: '/UR-1',
    },
    {
      id: 'SPEC-4',
      description: 'As a user...',
      items: ['50', '200', '20%'],
      url: '/UR-1',
    },
    {
      id: 'SPEC-5',
      description: 'As a user...',
      items: ['50', '200', '20%'],
      url: '/UR-1',
    },
  ];
  return <HomePage headings={headings} items={items} />;
};

export default Home;
