
import { ComponentMeta, Story } from '@storybook/react';
import { BenefitCard as Component, BenefitCardProps } from '.';

import Key from "@assets/benefits-icons/key.svg"

export default {
  title: 'Components/BenefitCard',
  component: Component,
  argTypes: {
    iconName: {
      table: {
        display: false,
      }
    },
    title: {
      type: "string",
      defaultValue: "Title"
    },
    text: {
      type: "string",
      defaultValue: "Text"
    }
  }
} as ComponentMeta<typeof Component>;

type TemplateProps = {
  iconName: string;
  title: string;
  text: string;
}

export const BenefitCard = ({iconName, title, text} : TemplateProps) => {
   
  const card = {
    iconName: Key,
    title, 
    id: "1",
    text,
  }

  return <Component card={card} />;
}

