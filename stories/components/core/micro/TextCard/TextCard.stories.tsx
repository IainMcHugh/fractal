import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextCard } from 'components/core/micro/TextCard/TextCard';
import { STATUS } from 'constants/index';

export default {
  title: 'Core/TextCard',
  component: TextCard,
} as ComponentMeta<typeof TextCard>;

const Template: ComponentStory<typeof TextCard> = (args) => (
  <TextCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'UR-1',
  description: 'As a user, this is some text',
  items: ['50', '200'],
};

export const Passing = Template.bind({});
Passing.args = {
  id: 'UR-1',
  description: 'As a user, this is some text',
  items: ['50', '200'],
  variant: STATUS.PASSING,
};

export const Partial = Template.bind({});
Partial.args = {
  id: 'UR-1',
  description: 'As a user, this is some text',
  items: ['50', '200'],
  variant: STATUS.PARTIAL,
};

export const Failing = Template.bind({});
Failing.args = {
  id: 'UR-1',
  description: 'As a user, this is some text',
  items: ['50', '200'],
  variant: STATUS.FAILING,
};
