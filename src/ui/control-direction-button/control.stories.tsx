
import { ComponentMeta } from '@storybook/react';
import { ControlDirectionButton as Component, ControlDirectionButtonProps } from '.';


export default {
  title: 'UI/ControlDirectionButton',
  component: Component,
  argTypes: {
    direction: {
      type: "string",
      defaultValue: "left",
      options: ["left", "right"],
      control: {
        type: "radio",
      },
    }
  }
} as ComponentMeta<typeof Component>;


export const ControlDirectionButton = (args: ControlDirectionButtonProps) => <Component {...args} />;