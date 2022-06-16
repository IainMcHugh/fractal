import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextCardList } from 'components/core/macro/TextCardList/TextCardList';
import { STATUS } from 'constants/index';

// TODO: GET THIS OUT OF HERE
const mock = {
  id: 'UR-1',
  description: 'As a user, this is some text',
  items: ['50', '200', '20%'],
  variant: STATUS.PASSING,
};

export default {
  title: 'Core/TextCardList',
  component: TextCardList,
} as ComponentMeta<typeof TextCardList>;

const Template: ComponentStory<typeof TextCardList> = (args) => (
  <TextCardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headings: {
    id: 'ID',
    description: 'Description',
    items: ['Sys Req', 'Fun Req', 'Status'],
  },
  items: [mock, mock, mock],
};
