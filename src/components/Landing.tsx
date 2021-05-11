import React, { useState } from 'react';
import { LandingWrapper, SelectWrapper } from './Landing.styles';

type Props = {
  start: (arg0: number, arg1: string) => void;
};

const Landing: React.FC<Props> = ({ start }) => {
  const [totalQ, setTotalQ] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('easy');

  const onTotalQChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTotalQ(Number(e.currentTarget.value));
  };

  const onDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.currentTarget.value);
  };

  const startGame = () => {
    start(totalQ, difficulty);
  };
  return (
    <LandingWrapper>
      <h2>Select your preference below: </h2>
      <SelectWrapper>
        <label htmlFor="totalQ">
          How many questions would you like to have?
        </label>
        <select id="totalQ" name="select" onChange={onTotalQChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </SelectWrapper>
      <SelectWrapper>
        <label htmlFor="difficulty">Which level of difficulty?</label>
        <select id="difficulty" name="select" onChange={onDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </SelectWrapper>

      <button className="start" onClick={startGame}>
        Start
      </button>
    </LandingWrapper>
  );
};

export default Landing;
