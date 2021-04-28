import React from 'react';

const Start = (props) => {
  const { onStartClick } = props;

  return (
    <div className="start-container">
      <button className="start-button" onClick={() => onStartClick()}>Start</button>
    </div>
  );
}
 
export default Start;