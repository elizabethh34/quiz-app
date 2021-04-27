import React, { Component, Fragment } from 'react';
import './App.css';
import { allQuestions } from './questions';
import Question from './components/Question';
import Header from './components/Header';
import Start from './components/Start';
import Result from './components/Result';

class App extends Component {
  state = {
    selectedQuestions: [],
    score: 0,
    questionIndex: 0,
    startOpacity: 1,
    questionOpacity: 0,
  }

  startNewQuiz = () => {
    this.setState({
      selectedQuestions: this.getNewQuestions(),
      score: 0,
      questionIndex: 0,
      startOpacity: 0,
      questionOpacity: 1,
      numOfClicks: 0
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
    const { startOpacity, questionOpacity, selectedQuestions, questionIndex, score } = this.state;
    console.log(questionIndex, selectedQuestions.length)
    return (
      <Fragment>
        <Header />
        <div className="quiz-container">
          <Start 
            onStartClick={this.startNewQuiz}
            startOpacity={startOpacity}
          />
          {questionIndex < selectedQuestions.length?
            <Question
              question={selectedQuestions[questionIndex]}
              questionOpacity={questionOpacity}
              changeQuestion={this.handleQuestionChange}
              questionIndex={questionIndex}
              numOfQuestions={selectedQuestions.length}
              endQuiz={this.endQuiz}
              determineIfCorrect={this.determineIfCorrect}
            /> : 
            <Result 
              score={score}
              numOfQuestions={selectedQuestions.length}
            />}
        </div>
      </Fragment> 
    );
  }
}
 
export default App;
