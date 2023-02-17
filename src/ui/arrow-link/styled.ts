import { Colors } from "@theme/fields/color";
import styled from "styled-components";


export type LinkWrapperProps = {
  color?: Colors;
};

export const LinkWrapper = styled.a<LinkWrapperProps>`
  color: ${({ theme, color }) => (!color ? theme.color.primary : theme.color[color])};
  cursor: pointer;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.heading.fontSize.h7};
  line-height: ${({ theme }) => theme.typography.heading.lineHeight.h7};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  display: flex;
  align-items: center;
  width: fit-content;
  `;

export const Rotate = styled.div`
  transform: rotate(180deg);
  display: flex;
  justify-content: center;
`