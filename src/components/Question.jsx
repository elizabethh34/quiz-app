import React from 'react';

const Question = (props) => {
  const { question, questionOpacity } = props;
  
  return (
    <div className="question-container" style={{opacity: questionOpacity}}>
      <div className="question-info">
        <h2 className="question">What is the capital of {question.country}?</h2>
        <div className="options-container">
          {question.options.map((option, index) => {
            return (
            <div className="option" key={index}>
              <div className="option-text">{option}</div>
            </div>
            )
          })}
        </div>
        <button className="next-question">Next</button>
      </div> 
    </div>
  );
}
 
export default Question;