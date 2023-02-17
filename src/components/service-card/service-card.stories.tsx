
import { ComponentMeta, Story } from '@storybook/react';
import { Language } from '@types';
import { ServiceCard as Component, ServiceCardProps } from '.';
import image from "./icon_key.png"

export default {
  title: 'Components/ServiceCard',
  component: Component,
  argTypes: {
    image: {
      table: {
        disable: true,
      }
    },
    title: {
      type: "string",
      defaultValue: "Title"
    },
    description: {
      type: "string",
      defaultValue: "Description"
    },
    card: {
      table: {
        disable: true,
      }
    },
    handleLinkClick: {
      table: {
        disable: true,
      }
    }
  },
  args: {
    handleLinkClick: (id: string) => () => {},
  }
} as ComponentMeta<typeof Component>;

type TemplateProps = {
  image: string;
  title: string;
  description: string;
  lng: Language;
}

export const ServiceCard = ({title, description, lng} : TemplateProps) => {
   
  const card = {
    image,
    title, 
    id: "1",
    description,
  }

  return <Component card={card} lng={lng} handleLinkClick={(id: string) => () => {}}/>;
}

