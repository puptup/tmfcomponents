import { LeftArrow } from "@assets/control-icons/left-arrow";
import { theme } from "@theme";
import { Colors } from "@theme/fields/color";
import { LinkWrapper, Rotate } from "./styled";


export type LinkProps = {
  color?: Colors;
  children: string;
  onClick: () => void;
};

export const Link = ({color, children, onClick}: LinkProps) => {
  return <LinkWrapper color={color} onClick={onClick}>
    {children}
    <Rotate>
      <LeftArrow width={30} height={30} fill={theme.color.primary || theme.color[color!]} />
    </Rotate>
   </LinkWrapper>
}
