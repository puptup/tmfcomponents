import { LeftArrow } from "@assets/control-icons/left-arrow";
import { device } from "@constants/devices";
import styled from "styled-components";

export type WrapperProps = {
  direction: "left" | "right";
  disabled: boolean;
};

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing.button.controlButtonWidth.l};
  padding: ${({ theme }) => theme.spacing.button.controlButtonPadding.l} 0;
  background-color: ${({ theme }) => theme.color.tertiary};
  transform: rotate(${({ direction }) => (direction === "left" ? "0" : "180deg")});
  border: 0;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  transition: all 0.2s linear;


  &:hover:enabled {
    background-color: ${({ theme }) => theme.color.blue3};
    &:active {
      background-color: ${({ theme }) => theme.color.tertiary};
    }
  }
  ${({theme, disabled}) => disabled && `
    cursor: default;
    background-color: ${theme.color.blue3};
  `}

  &:disabled {
    cursor: default;
  }

  @media ${device.laptop} {
    width: ${({ theme }) => theme.spacing.button.controlButtonWidth.s};
    padding: ${({ theme }) => theme.spacing.button.controlButtonPadding.s} 0;

  }
`;

export type ControlDirectionButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
};

export const ControlDirectionButton = ({direction, onClick, disabled}: ControlDirectionButtonProps) => {
  return <Wrapper direction={direction} onClick={onClick} disabled={disabled}>
    <LeftArrow width={30} height={30}></LeftArrow>
  </Wrapper>
}