import React from 'react';

const Start = (props) => {
  const { onStartClick, startOpacity } = props;

  return (
    <div className="start-container" style={{opacity: startOpacity}}>
      <div className="start-button" onClick={() => onStartClick()}>Start</div>
    </div>
  );
}
 
export default Start;