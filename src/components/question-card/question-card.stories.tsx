

import { ComponentMeta, Story } from '@storybook/react';
import { QuestionCard as Component, QuestionCardProps } from '.';


export default {
  title: 'Components/QuestionCard',
  component: Component,
  argTypes: {
    question: {
      defaultValue: "Question"
    },
    answer: {
      defaultValue: "Answer"
    }
  }
} as ComponentMeta<typeof Component>;


export const QuestionCard = (args : QuestionCardProps) => {
  
  return <Component {...args} />;
}

