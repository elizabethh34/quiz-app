import React from 'react';

const Question = (props) => {
  const { question, changeQuestion, questionIndex, numOfQuestions, determineIfCorrect } = props;

  return (
    <div className="question-container">
      <div className="question-info">
        <h2 className="question">What is the capital of {question.country}?</h2>
        <div className="options-container">
          {question.options.map((option, index) => {
            return (
            <div className="option" key={index}>
              <div className="option-text" onClick={() => determineIfCorrect(option, question.correct)}>{option}</div>
            </div>
            )
          })}
        </div>
        <button
          className="next-question"
          onClick={() => changeQuestion()}
        >{questionIndex < numOfQuestions - 1 ? "Next" : "Finish"}
        </button>
      </div> 
    </div>
  );
}
 
export default Question;