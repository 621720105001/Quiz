import React, { useState } from 'react';
import './Quiz.css';
import Question from './dataset/Question';
import dd from './dataset/gif/congratsss.gif'



function Quiz() {
  const [questionIDX, setQuestionIDX] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const currentQuestion = Question[questionIDX];

  const selectOption = (idx) => {
    if (currentQuestion.answer === idx) {
      setScore(score + 1);
    }
    const nextQ = questionIDX + 1;
    if (nextQ < Question.length) {
      setQuestionIDX(nextQ);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setQuestionIDX(0);
    setScore(0);
    setShowScore(false);
  }; 

  return (
    <div className='quiz-container'>
      {showScore ? (
        <>
        <div className='image'>
           <img src={dd}/>
           </div>
          <h1>Your score is: {score}</h1>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </>
      ) : (
        <div className='quiz-container_questions'>
          <p>{currentQuestion.question}</p>
          <div className='quiz-container_options'>
            <ul className='quiz-container_ul'>
              {currentQuestion.options.map((option, i) => (
                <li key={i} className='quiz-container_li' onClick={() => selectOption(i)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
