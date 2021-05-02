import React, { Component } from 'react';
import './App.css';
import { allQuestions } from './questions';
import Question from './components/Question';
import Header from './components/Header';
import Start from './components/Start';
import Result from './components/Result';
import background from './images/background-map.png';

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
    while (newQuestions.length < 10){
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

    if (choice === correct && this.state.numOfClicks === 0) {
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
      <div className="main-container" style={{backgroundImage: `linear-gradient(to top, rgba(171, 155, 175, 0.6), rgba(51, 39, 54, 0.9)), url(${background})`}}>
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
      </div> 
    );
  }
}
 
export default App;
