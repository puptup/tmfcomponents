
import { ComponentMeta } from '@storybook/react';
import { Button as Component, ButtonProps } from '.';

const colors = ["primary" , "primaryHovered" , "secondary" , "tertiary" , "blue1" , "blue2" , "blue3" , "black" , "grey" , "background" , "red" , "white" ]

export default {
  title: 'UI/Button',
  component: Component,
  argTypes: {
    size: {
      type: "string",
      defaultValue: "m",
      options: ["m", "s",  "l", "xl"],
      control: {
        type: "select",
      },
    },
    fullsize: {
      type: "boolean",
      defaultValue: true,
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    textColor: {
      type: "string",
      defaultValue: "white",
      options: colors,
      control: {
        type: "select",
      },
    },
    color: {
      type: "string",
      defaultValue: "primary",
      options: colors,
      control: {
        type: "select",
      },
    },
  }
} as ComponentMeta<typeof Component>;


export const Button = (args: ButtonProps) => <Component {...args}>Text</Component>;