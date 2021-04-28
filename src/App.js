import React, { Component, Fragment } from 'react';
import './App.css';
import { allQuestions } from './questions';
import Question from './components/Question';
import Header from './components/Header';
import Start from './components/Start';
import Result from './components/Result';

class App extends Component {
  state = {
    started: false,
    selectedQuestions: [],
    score: 0,
    questionIndex: 0,
    numOfClicks: 0
  }

  startNewQuiz = () => {
    this.setState({
      started: true,
      selectedQuestions: this.getNewQuestions(),
      score: 0,
      questionIndex: 0,
      numOfClicks: 0
    });
  }

  getNewQuestions = () => {
    let newQuestions = [];
    while (newQuestions.length < 5){
      const randomIndex = Math.floor(Math.random() * allQuestions.length);

      if (!newQuestions.includes(allQuestions[randomIndex])) {
        newQuestions.push(allQuestions[randomIndex]);
      }
    }
    return newQuestions;
  }

  handleQuestionChange = () => {
    this.setState(prevState => {
      return {
        questionIndex: prevState.questionIndex + 1,
        numOfClicks: 0
      }
    });
  }

  determineIfCorrect = (choice, correct) => {
    this.setState(prevState => {
      return {numOfClicks: prevState.numOfClicks + 1}
    });

    if (choice === correct && this.state.numOfClicks < 1) {
      this.setState(prevState => {
        return {score: prevState.score + 1}
      });
      return true;
    } else {
      return false;
    }
  }

  render() { 
    const { started, selectedQuestions, questionIndex, score } = this.state;
    
    return (
      <Fragment>
        <Header />
        <div className="quiz-container">
          {!started ? <Start 
            onStartClick={this.startNewQuiz}
          /> : questionIndex < selectedQuestions.length ?
            <Question
              question={selectedQuestions[questionIndex]}
              changeQuestion={this.handleQuestionChange}
              questionIndex={questionIndex}
              numOfQuestions={selectedQuestions.length}
              endQuiz={this.endQuiz}
              determineIfCorrect={this.determineIfCorrect}
            /> : 
            <Result 
              score={score}
              numOfQuestions={selectedQuestions.length}
              onPlayAgain={this.startNewQuiz}
            />}          
        </div>
      </Fragment> 
    );
  }
}
 
export default App;
