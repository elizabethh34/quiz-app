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
    currentQuestion: null,
    questionIndex: 0,
    startOpacity: 1,
    questionOpacity: 0
  }

  StartNewQuiz = () => {
    this.setState({
      selectedQuestions: this.GetNewQuestions(),
      score: 0,
      currentQuestion: null,
      questionIndex: 0
    });
  }

  
  handleOpacityChange = () => {
    this.setState(prevState => {
      return {
        startOpacity: 0,
        questionOpacity: 1
      }
    })
  }

  EndQuiz = () => {
    if (this.state.questionIndex >= this.state.selectedQuestions.length){
      // end game
    }
  }

  GetNextQuestion = () => {
    this.setState(prevState => {
      return {
        questionIndex: prevState.questionIndex++
      }
    });
  }

  GetNewQuestions = () => {
    let newQuestions = [];
    while (newQuestions.length < 5){
      const randomIndex = Math.floor(Math.random() * allQuestions.length);

      if (!newQuestions.includes(allQuestions[randomIndex])) {
        newQuestions.push(allQuestions[randomIndex]);
      }
    }
    console.log(newQuestions)
    return newQuestions;
  }

  render() { 
    return (
      <Fragment>
        <Header />
        <div className="quiz-container">
          <Start 
            onStartClick={this.handleOpacityChange}
            startOpacity={this.state.startOpacity}
          />
          <Question
            question={this.state.selectedQuestions[0]}
            questionOpacity={this.state.questionOpacity}
          />
        </div>
      </Fragment> 
    );
  }
}
 
export default App;
