import React, { Component } from 'react';

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      score: 0,
      showScore: false,
      selectedAnswer: null,
    };
  }

  handleAnswerOptionClick = (isCorrect) => {
    this.setState({ selectedAnswer: isCorrect });
    if (isCorrect) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));
    }
  };

  handleNextQuestion = () => {
    const nextQuestion = this.state.currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      this.setState({
        currentQuestionIndex: nextQuestion,
        selectedAnswer: null,
      });
    } else {
      this.setState({ showScore: true });
    }
  };

  handleRestartQuiz = () => {
    this.setState({
      score: 0,
      currentQuestionIndex: 0,
      showScore: false,
      selectedAnswer: null,
    });
  };

  render() {
    const appStyles = {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
    };

    const buttonStyles = {
      margin: '5px',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    };

    const correctButtonStyles = {
      ...buttonStyles,
      backgroundColor: '#4CAF50', // Green
      color: 'white',
    };

    const incorrectButtonStyles = {
      ...buttonStyles,
      backgroundColor: '#f44336', // Red
      color: 'white',
    };

    const defaultButtonStyles = {
      ...buttonStyles,
      backgroundColor: '#008CBA', // Blue
      color: 'white',
    };

    const scoreSectionStyles = {
      marginTop: '20px',
    };

    const nextButtonStyles = {
      ...buttonStyles,
      backgroundColor: '#008CBA',
      color: 'white',
      display: this.state.selectedAnswer !== null ? 'inline-block' : 'none',
    };

    return (
      <div style={appStyles}>
        <h1>Simple Quiz</h1>
        {this.state.showScore ? (
          <div style={scoreSectionStyles}>
            <h2>You scored {this.state.score} out of {questions.length}!</h2>
            <button style={buttonStyles} onClick={this.handleRestartQuiz}>Play Again</button>
          </div>
        ) : (
          <div>
            <h2>
              {this.state.currentQuestionIndex + 1}. {questions[this.state.currentQuestionIndex].question}
            </h2>
            <div>
              {questions[this.state.currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  style={
                    this.state.selectedAnswer !== null
                      ? answer.correct
                        ? correctButtonStyles
                        : incorrectButtonStyles
                      : defaultButtonStyles
                  }
                  onClick={() => this.handleAnswerOptionClick(answer.correct)}
                  disabled={this.state.selectedAnswer !== null}
                >
                  {answer.text}
                </button>
              ))}
            </div>
            <button
              style={nextButtonStyles}
              onClick={this.handleNextQuestion}
            >
              {this.state.currentQuestionIndex === questions.length - 1 ? 'Show Score' : 'Next'}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default QuizApp;
