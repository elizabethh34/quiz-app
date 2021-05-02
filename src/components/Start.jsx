import React from 'react';

const Start = (props) => {
  const { onStartClick } = props;

  return (
    <div className="start-container">
      <button className="start-button" onClick={() => onStartClick()}>Start</button>
      <h3 className="intro">Answer these 10 questions about world capitals. Questions change everytime!</h3>
    </div>
  );
}
 
export default Start;