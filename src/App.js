import React, { Component, Fragment } from 'react';
import './App.css';
import { allQuestions } from './questions';
import Question from './components/Question';
import Header from './components/Header';
import Start from './components/Start';

class App extends Component {
  state = {
    selectedQuestions: allQuestions,
    score: 0,
    questionIndex: 0,
    startOpacity: 1,
    questionOpacity: 0
  }

  startNewQuiz = () => {
    this.setState({
      selectedQuestions: this.getNewQuestions(),
      score: 0,
      questionIndex: 0,
      startOpacity: 0,
      questionOpacity: 1
    });
  }

  endQuiz = () => {
    console.log("end")
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
      return {questionIndex: prevState.questionIndex + 1}
   });
  }

  determineIfCorrect = (choice, correct) => {
    if (choice === correct) {
      this.setState(prevState => {
        return {score: prevState.score + 1}
      });
    }
  }

  render() { 
    const { startOpacity, questionOpacity, selectedQuestions, questionIndex } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="quiz-container">
          <Start 
            onStartClick={this.startNewQuiz}
            startOpacity={startOpacity}
          />
          <Question
            question={selectedQuestions[questionIndex]}
            questionOpacity={questionOpacity}
            changeQuestion={this.handleQuestionChange}
            questionIndex={questionIndex}
            numOfQuestions={selectedQuestions.length}
            endQuiz={this.endQuiz}
            determineIfCorrect={this.determineIfCorrect}
          />
        </div>
      </Fragment> 
    );
  }
}
 
export default App;
