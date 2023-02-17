
import { ComponentMeta, Story } from '@storybook/react';
import { Carousel as Component, CarouselProps } from '.';


export default {
  title: 'Components/Carousel',
  component: Component,
  argTypes: {
    slidesPerView: {
      type: "number",
      defaultValue: 3
    },
    title: {
      type: "string",
      defaultValue: "Title"
    }
  }
} as ComponentMeta<typeof Component>;

const Slide = ({color}: {color: string}) => {
  return <div style={{width: "100%", height: 150, backgroundColor: color}}></div>
}


export const Carousel = (args: CarouselProps) => {
  return <Component {...args}>
      <Slide color="pink"></Slide>
      <Slide color="blue"></Slide>
      <Slide color="red"></Slide>
      <Slide color="green"></Slide>
      <Slide color="yellow"></Slide>
      <Slide color="purple"></Slide>
  </Component>;
}

