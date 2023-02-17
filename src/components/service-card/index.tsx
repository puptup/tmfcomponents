
import { ServiceCardType, Language } from "@types";
import { Link } from "@ui/arrow-link";

import { Description, Img, TextBlock, Title, Wrapper } from "./styled";

export type ServiceCardProps = {
  card: ServiceCardType;
  lng: Language;
  handleLinkClick: (id: string) => () => void;
};

export const ServiceCard = ({ card, lng, handleLinkClick }: ServiceCardProps) => {
  const { image, title, description, id } = card;
  return (
    <Wrapper>
      <Img src={image} />
      <TextBlock>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextBlock>
      <Link onClick={handleLinkClick(id)}>{lng !== "ru" ? "Read more" : "Читать далее"}</Link>
    </Wrapper>
  );
};
