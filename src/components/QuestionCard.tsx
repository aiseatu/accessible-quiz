import React, { useState } from 'react';
import { AnswerObject } from '../App';
import { Wrapper, InputWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (arg0: string) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  questionNr,
  totalQuestions,
  userAnswer,
}) => {
  const [selected, setSelected] = useState('');
  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
  };
  const onQuestionSubmit = () => {
    callback(selected);
  };
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}{' '}
      </p>
      <fieldset>
        <legend dangerouslySetInnerHTML={{ __html: question }} />

        {answers.map((answer, index) => (
          <div key={index}>
            <InputWrapper
              key={answer}
              userClicked={selected === answer}
              right={
                selected === answer && userAnswer?.correctAnswer === answer
              }
              wrong={
                selected === answer &&
                userAnswer !== undefined &&
                userAnswer.correctAnswer !== answer
              }>
              <input
                type="radio"
                name={`question${questionNr}`}
                id={`option${index}`}
                value={answer}
                onChange={onRadioChange}
                checked={selected === answer}></input>
              <label htmlFor={`option${index}`} aria-live="polite">
                <span dangerouslySetInnerHTML={{ __html: answer }} />
                <span className="right">
                  <span aria-hidden="true">&#10004;</span>
                  <span className="sr-only">correct</span>
                </span>
                <span className="wrong">
                  <span aria-hidden="true">&#10008;</span>
                  <span className="sr-only">incorrect</span>
                </span>
              </label>
            </InputWrapper>
          </div>
        ))}
        <button
          disabled={userAnswer ? true : false}
          type="submit"
          onClick={onQuestionSubmit}>
          Submit
        </button>
      </fieldset>
    </Wrapper>
  );
};

export default QuestionCard;
