import React, { Component } from 'react';

class Result extends Component {
  
  determineRanking = (score, numQuestions) => {
    const percentage = (score / numQuestions) * 100;
    if (percentage === 100) {
      return "Perfect Score! You're an Expert!";
    } else if (percentage >= 80) {
      return "Good Job!";
    } else if (percentage >= 50) {
      return "Not Bad!";
    } else {
      return "Keeping Studying!";
    }
  }

  render() { 
    const { score, numOfQuestions, onPlayAgain } = this.props;

    return (
      <div className="result-container">
        <div className="result-info">
          <h2 className="result">Result</h2>
          <h3 className="score">{score}/{numOfQuestions}</h3>
          <h4 className="ranking">{this.determineRanking(score, numOfQuestions)}</h4>
          <button className="play-again" onClick={() => onPlayAgain()}>Play Again</button>
        </div>
      </div>
    );
  }
}
 
export default Result;