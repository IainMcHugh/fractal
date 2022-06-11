import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextCard } from 'components/core/TextCard/TextCard';

export default {
  title: 'Core/TextCard',
  component: TextCard,
} as ComponentMeta<typeof TextCard>;

const Template: ComponentStory<typeof TextCard> = (args) => (
  <TextCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  description: 'As a user, this is some text',
};

export const Passing = Template.bind({});
Passing.args = {
  description: 'As a user, this is some text',
  bgColor: '#009900',
  textColor: '#ffffff',
};

export const Failing = Template.bind({});
Failing.args = {
  description: 'As a user, this is some text',
  bgColor: '#990000',
  textColor: '#ffffff',
};
