import React, { useState, useEffect } from 'react';
import '../styles/Question.css';

const Question = ({ question, onAnswer, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setFeedback(null);
    setAnswered(false);
    setImageError(false);
  }, [question]);

  const handleOptionSelect = (option) => {
    if (answered) return;
    
    setSelectedOption(option);
    
    if (option === question.correctAnswer) {
      setFeedback("Rätt! Bra jobbat! 😊");
      setAnswered(true);
      onAnswer(true);
    } else {
      setFeedback("Fel svar. Försök igen! 🙁");
      setAnswered(true);
      onAnswer(false);
    }
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question.question}</h2>
      
      <div className="image-container">
        {imageError ? (
          <div className="image-placeholder">
            <p>Kunde inte ladda bilden</p>
          </div>
        ) : (
          <img 
            src={`${process.env.PUBLIC_URL}/images/${question.image}`} 
            alt="Frukt eller grönsak" 
            className="question-image"
            onError={() => {
              console.error(`Failed to load image: ${question.image}`);
              setImageError(true);
            }}
          />
        )}
      </div>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? 
              (option === question.correctAnswer ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      
      {feedback && (
        <div className={`feedback ${feedback.includes("Rätt") ? "correct-feedback" : "incorrect-feedback"}`}>
          {feedback}
        </div>
      )}
      
      {answered && (
        <button className="next-button" onClick={onNextQuestion}>
          Nästa fråga
        </button>
      )}
    </div>
  );
};

export default Question;
