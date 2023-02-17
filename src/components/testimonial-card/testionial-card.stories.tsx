
import { ComponentMeta, Story } from '@storybook/react';
import { TestimonalCard as Component, TestimonalCardProps } from '.';
import Img from "./tigran-nazaret.png"

const card =     {
  id: "8",
  image: Img,
  name: "Tigran Nazaret",
  role: "Data analyst",
  text: "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ",
}

export default {
  title: 'Components/TestimonalCard',
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


const Template: Story<TestimonalCardProps> = (args) => {
  return <Component {...args} />;
}

export const Primary = Template.bind({})
Primary.args = {
  variant: "small",
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: "img-outside",
}
