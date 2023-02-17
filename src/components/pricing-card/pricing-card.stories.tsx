



import { ComponentMeta, Story } from '@storybook/react';
import { ChoosedPlan, Language } from '@types';
import { PricingCard as Component, PricingCardProps as Props } from '.';


export default {
  title: 'Components/PricingCard',
  component: Component,
  argTypes: {
    card: {
      table:{
        disable: true,
      }
    },
    openPopup: {
      table:{
        disable: true,
      }
    },
    name: {
      type: "string",
      defaultValue: "Name"
    },
    pricePerMonth: {
      type: "number",
      defaultValue: 59.99
    },
    pricePerYear: {
      type: "number",
      defaultValue: 50*12,
    }
  },
} as ComponentMeta<typeof Component>;

type TemplateProps = {
  name: string,
  pricePerMonth: number,
  pricePerYear: number,
  lng: Language,
}

export const PricingCard = (args: TemplateProps) => {
  const card = {
    ...args,
    id: "2",
    benefits: ["Для небольших команд", "Поддержка сообщества", "Трафик – 60гб"],
  }

  return <Component lng={args.lng} card={card} openPopup={(plan: ChoosedPlan) => () => {}}></Component>;
}

