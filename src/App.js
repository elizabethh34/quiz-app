import React, { Component, Fragment } from 'react';
import './App.css';
import { allQuestions } from './questions';
import Question from './components/Question';
import Header from './components/Header';

class App extends Component {
  state = {
    selectedQuestions: allQuestions,
    score: 0,
    currentQuestion: null,
    questionIndex: 0
  }

  StartNewGame = () => {
    this.setState({
      selectedQuestions: this.GetNewQuestions(),
      score: 0,
      currentQuestion: null,
      questionIndex: 0
    });
  }

  EndQuiz = () => {
    if (this.state.questionIndex >= this.state.selectedQuestions.length){
      // end game
    }
  }

  GetNextQuestion = () =>{
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
        <Question question={this.state.selectedQuestions[0]}/>
      </Fragment> 
    );
  }
}
 
export default App;
