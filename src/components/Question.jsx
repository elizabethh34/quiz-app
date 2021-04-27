import React from 'react';

const Question = (props) => {
  const { question, questionOpacity, changeQuestion, questionIndex, numOfQuestions, endQuiz, determineIfCorrect } = props;

  return (
    <div className="question-container" style={{opacity: questionOpacity}}>
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
          onClick={questionIndex < numOfQuestions - 1? () => changeQuestion() : () => endQuiz()}
        >{questionIndex < numOfQuestions - 1? "Next" : "Finish"}
        </button>
      </div> 
    </div>
  );
}
 
export default Question;