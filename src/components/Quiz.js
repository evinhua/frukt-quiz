import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import questions from '../data/questions';
import '../styles/Quiz.css';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <>
          <div className="progress-container">
            <div className="progress-text">
              Fråga {currentQuestionIndex + 1} av {questions.length}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNextQuestion={handleNextQuestion}
          />
          
          <div className="score-display">
            Poäng: {score}
          </div>
        </>
      ) : (
        <Result score={score} totalQuestions={questions.length} onRestart={restartQuiz} />
      )}
    </div>
  );
};

export default Quiz;
