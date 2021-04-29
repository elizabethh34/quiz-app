import React, { Component } from 'react';

class Question extends Component {
  state = {
    colour: "",
    chosenAnswer: "",
    numOfClicks: 0
  }

  handleAnswerClick = (event, choice, correct) => {
    const IsCorrect = this.props.determineIfCorrect(choice, correct);
    
    this.setState(prevState => {
      return {
        numOfClicks: prevState.numOfClicks + 1,
      }
    });

    if (this.state.numOfClicks < 1) {
      this.setState({chosenAnswer: event.target.innerText});
      
      if (IsCorrect) {
        this.setState({colour: "rgb(12, 197, 104)"});
      } else {
        this.setState({colour: "rgb(214, 19, 13)"});
      }
    }
  }

  handleNextQuestion = () => {
    this.props.changeQuestion();
    this.setState({
      numOfClicks: 0,
      colour: ""
    });
  }

  render() { 
    const { question, questionIndex, numOfQuestions } = this.props;
    const { chosenAnswer } = this.state;

    return (
      <div className="question-container">
        <div className="question-info">
          <h2 className="question">What is the capital of {question.country}?</h2>
          <div className="options-container">
            {question.options.map((option, index) => {
              return (
                <div className="option" key={index}>
                  <div
                    className="option-text"
                    style={chosenAnswer === option && this.state.numOfClicks >= 1 ? {backgroundColor: this.state.colour} : {backgroundColor: ""}}
                    onClick={(event) => this.handleAnswerClick(event, option, question.correct)}
                  >{option}
                  </div>
                </div>
              )
            })}
          </div>
          <button
            className="next-question"
            onClick={() => this.handleNextQuestion()}
          >{questionIndex < numOfQuestions - 1 ? "Next" : "Finish"}
          </button>
        </div> 
      </div>
    );
  }
}
 
export default Question;