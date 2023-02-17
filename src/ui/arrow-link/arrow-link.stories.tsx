
import { ComponentMeta } from '@storybook/react';
import { Link as Component, LinkProps } from '.';


export default {
  title: 'UI/Link',
  component: Component,
  argTypes: {
    color: {
      type: "string",
      defaultValue: "primary",
      options: ["primary" , "primaryHovered" , "secondary" , "tertiary" , "blue1" , "blue2" , "blue3" , "black" , "grey" , "background" , "red" , "white" ],
      control: {
        type: "select",
      },
    },
  }
} as ComponentMeta<typeof Component>;


export const Link = (args: LinkProps) => <Component {...args}>Text</Component>;