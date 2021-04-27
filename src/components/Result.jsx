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
    const { score, numOfQuestions } = this.props;

    return (
      <div className="result-container">
        <h2>Result</h2>
        <h3>{score}/{numOfQuestions}</h3>
        <h4>{this.determineRanking(score, numOfQuestions)}</h4>
        <div className="play-again-container">
          <button>Play Again</button>
        </div>
      </div>
    );
  }
}
 
export default Result;