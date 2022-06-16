import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components/core/micro/Button/Button';

export default {
  title: 'Core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Create +',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Create +',
  svariant: 'SECONDARY',
};
