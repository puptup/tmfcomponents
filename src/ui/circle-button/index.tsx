import { FirstCircle, SecondCircle, ThirdCircle } from "./styled";

export type CircleButtonProps = {
  children: React.ReactNode;
  handleRoute: () => void;
};

export const CircleButton = ({ children, handleRoute }: CircleButtonProps) => {
  return (
    <FirstCircle onClick={handleRoute}>
      <SecondCircle>
        <ThirdCircle>{children}</ThirdCircle>
      </SecondCircle>
    </FirstCircle>
  );
};
