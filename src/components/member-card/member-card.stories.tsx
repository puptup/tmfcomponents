
import { ComponentMeta } from '@storybook/react';
import { MemberCard as Component, MemberCardProps } from '.';
import img from "./1.png"

export default {
  title: 'Components/MemberCard',
  component: Component,
  argTypes: {
    image: {
      table: {
        disable: true,
      }
    },
    id: {
      table: {
        disable: true,
      }
    },
    name: {
      type: "string",
      defaultValue: "Name"
    },
    role: {
      type: "string",
      defaultValue: "Role"
    }
  },
  args: {
    handleLinkClick: () => () => {},
  },
} as ComponentMeta<typeof Component>;

export const MemberCard = (args: MemberCardProps) => {
  return <Component {...args} image={img}/>;
}

