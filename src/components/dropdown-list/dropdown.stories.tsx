
import { ComponentMeta, Story } from '@storybook/react';
import { DropdownList as Component, DropdownListProps as Props } from '.';


export default {
  title: 'Components/DropdownList',
  component: Component,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Title"
    },
    textColor: {
      defaultValue: "black"
    },
    lineColor: {
      defaultValue: 'black'
    }
  }
} as ComponentMeta<typeof Component>;

const Slide = ({color}: {color: string}) => {
  return <div style={{width: "100%", height: 20, backgroundColor: color}}></div>
}


export const DropdownList = (args: Props) => {
  return <Component {...args}>
      <Slide color="pink"></Slide>
      <Slide color="blue"></Slide>
      <Slide color="red"></Slide>
      <Slide color="green"></Slide>
      <Slide color="yellow"></Slide>
      <Slide color="purple"></Slide>
  </Component>;
}

