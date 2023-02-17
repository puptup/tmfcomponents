
import { Minus } from "@assets/control-icons/minus";
import { Plus } from "@assets/control-icons/plus";
import { useState } from "react";

import { Answer,  QuestionBlock, Title, Wrapper } from "./styled";

export type QuestionCardProps = {
  question: string;
  answer: string;
};

export const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Wrapper onClick={handleShow}>
      <QuestionBlock>
        <Title active={show}>{question}</Title>
        {show ? <Minus/> : <Plus />}
      </QuestionBlock>
      {show && <Answer>{answer}</Answer>}
    </Wrapper>
  );
};
