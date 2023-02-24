
import { Minus } from "@assets/control-icons/minus";
import { Plus } from "@assets/control-icons/plus";

import { Answer,  QuestionBlock, Title, Wrapper } from "./styled";

export type QuestionCardProps = {
  question: string;
  answer: string;
  active: boolean;
  handleActive: () => void;
};

export const QuestionCard = ({ question, answer , handleActive, active}: QuestionCardProps) => {
  return (
    <Wrapper onClick={handleActive}>
      <QuestionBlock>
        <Title active={active}>{question}</Title>
        {active ? <Minus/> : <Plus />}
      </QuestionBlock>
      {active && <Answer>{answer}</Answer>}
    </Wrapper>
  );
};
