
import { ComponentMeta } from '@storybook/react';
import { CircleButton as Component, CircleButtonProps } from '.';


export default {
  title: 'UI/CircleButton',
  component: Component,
  argTypes: {
  }
} as ComponentMeta<typeof Component>;


export const CircleButton = (args: CircleButtonProps) => <Component {...args}>Text</Component>;