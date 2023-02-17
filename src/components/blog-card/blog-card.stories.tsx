
import { ComponentMeta, Story } from '@storybook/react';
import { BlogCard as Component, BlogCardProps } from '.';
import Img from "./img_1.png"

const card = {
  image: Img,
  id: "1",
  date: "22 june 2022",
  title: "Staffing software: key capabilities and top products",
  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
  author: "William Pond",
  views: 481,
  tags: ["Data", "Future"],
}

export default {
  title: 'Components/BlogCard',
  component: Component,
  args: {
    card
  }
} as ComponentMeta<typeof Component>;

type TemplateProps = {
  iconName: string;
  title: string;
  text: string;
}


const Template: Story<BlogCardProps> = (args) => {
  return <Component {...args} />;
}

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
  lang: "en",
  handleLinkClick: (id: string) => () => {},
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: "secondary",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  ...Primary.args,
  variant: "tertiary",
}