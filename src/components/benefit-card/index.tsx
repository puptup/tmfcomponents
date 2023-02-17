import { BenefitCardType } from "@types";

import { Description, Icon, Title, Wrapper } from "./styled";

export type BenefitCardProps = {
  card: BenefitCardType;
};

export const BenefitCard = ({ card }: BenefitCardProps) => {
  const { iconName, text, title } = card;

  return (
    <Wrapper>
      <Icon src={iconName} />
      <Title>{title}</Title>
      <Description>{text}</Description>
    </Wrapper>
  );
};
