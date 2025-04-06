import React from 'react';
import '../styles/Result.css';

const Result = ({ score, totalQuestions, onRestart }) => {
  const getResultMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage === 100) {
      return "Fantastiskt! Du är en frukt- och grönsaksexpert! 🌟";
    } else if (percentage >= 70) {
      return "Bra jobbat! Du vet mycket om frukter och grönsaker! 😊";
    } else if (percentage >= 40) {
      return "Bra försök! Fortsätt lära dig om frukter och grönsaker! 👍";
    } else {
      return "Fortsätt öva! Du kommer att lära dig mer om frukter och grönsaker! 💪";
    }
  };

  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Avslutad!</h2>
      
      <div className="result-score">
        <p>Din poäng:</p>
        <div className="score-number">{score} / {totalQuestions}</div>
      </div>
      
      <p className="result-message">{getResultMessage()}</p>
      
      <button className="restart-button" onClick={onRestart}>
        Spela igen
      </button>
    </div>
  );
};

export default Result;
