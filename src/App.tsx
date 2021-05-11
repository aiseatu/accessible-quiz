import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
import movies from './images/movies.jpeg';
//component
import QuestionCard from './components/QuestionCard';
import Landing from './components/Landing';
//types
import { QuestionState } from './API';

import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

//const TOTAL_QUESTIONS = 3;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [qLength, setQLength] = useState<number>(5);
  // const [difficulty, setDifficulty] = useState<string>('easy');

  // const onTotalQChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTotalQ(Number(e.currentTarget.value));
  // };

  // const onDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setDifficulty(e.currentTarget.value);
  // };

  const startTrivia = async (totalQ: number, difficulty: string) => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(totalQ, difficulty);
    setQLength(totalQ);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (selected: string) => {
    if (!gameOver) {
      // user answer
      const answer = selected;
      //check answer
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      //save user answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === qLength) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Films Travia!</h1>
        {gameOver ? (
          <Landing start={startTrivia} />
        ) : // <div className="landing">
        //   <div>
        //     <label htmlFor="totalQ">
        //       How many questions would you like to have?
        //     </label>
        //     <select id="totalQ" name="select" onChange={onTotalQChange}>
        //       <option value="5">5</option>
        //       <option value="10">10</option>
        //       <option value="15">15</option>
        //     </select>
        //   </div>
        //   <div>
        //     <label htmlFor="difficulty">Which level of difficulty?</label>
        //     <select
        //       id="difficulty"
        //       name="select"
        //       onChange={onDifficultyChange}>
        //       <option value="easy">Easy</option>
        //       <option value="medium">Medium</option>
        //       <option value="hard">Hard</option>
        //     </select>
        //   </div>

        //   <button className="start" onClick={startTrivia}>
        //     Start
        //   </button>

        // </div>
        null}
        {!gameOver ? <p className="score">Score: {score} </p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver ? (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={qLength}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}

        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== qLength ? (
          <div>
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          </div>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
