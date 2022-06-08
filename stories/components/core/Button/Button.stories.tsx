import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components/core/Button/Button';

export default {
  title: 'Core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Click me!',
  svariant: 'SECONDARY',
};
