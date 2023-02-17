
import { ComponentMeta } from '@storybook/react';
import { SolutionCard as Component, SolutionCardProps } from '.';
import book from "./book.svg"

export default {
  title: 'Components/SolutionCard',
  component: Component,
  argTypes: {
    icon: {
      table: {
        disable: true,
      }
    },
    id: {
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
    }
  },
  args: {
    handleLinkClick: () => () => {},
    lng: "ru"
  },
} as ComponentMeta<typeof Component>;

export const SolutionCard = (args: SolutionCardProps) => {
  return <Component {...args} icon={book}/>;
}

