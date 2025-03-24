import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
    };
  }

  updateDisplay = (value) => {
    this.setState({ displayValue: this.state.displayValue + value });
  };

  clearDisplay = () => {
    this.setState({ displayValue: '' });
  };

  deleteLastCharacter = () => {
    this.setState({ displayValue: this.state.displayValue.slice(0, -1) });
  };

  evaluateExpression = () => {
    try {
      this.setState({ displayValue: eval(this.state.displayValue).toString() });
    } catch (e) {
      this.setState({ displayValue: 'Error' });
    }
  };

  render() {
    const { displayValue } = this.state;

    const containerStyle = {
      width: '100%',
      height: '100vh',
      background: '#e3f9ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const calculatorStyle = {
      background: '#3a4452',
      padding: '20px',
      borderRadius: '10px',
    };

    const inputStyle = {
      border: '0',
      outline: '0',
      width: '60px',
      height: '60px',
      borderRadius: '10px',
      boxShadow:
        '-8px -8px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.2)',
      background: 'transparent',
      fontSize: '20px',
      color: '#fff',
      cursor: 'pointer',
      margin: '10px',
    };

    const displayContainerStyle = {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '20px 0',
    };

    const displayStyle = {
      textAlign: 'right',
      flex: '1',
      fontSize: '45px',
      boxShadow: 'none',
      border: '2px solid white',
      backgroundColor: 'transparent',
      color: '#fff',
    };

    const operatorStyle = {
      color: 'yellowgreen',
    };

    const equalStyle = {
      width: '145px',
    };

    return (
      <div style={containerStyle}>
        <div style={calculatorStyle}>
          <form>
            <div style={displayContainerStyle}>
              <input
                type="text"
                value={displayValue}
                readOnly
                style={displayStyle}
              />
            </div>
            <div>
              <input
                type="button"
                value="AC"
                onClick={this.clearDisplay}
                style={{ ...inputStyle, ...operatorStyle }}
              />
              <input
                type="button"
                value="DE"
                onClick={this.deleteLastCharacter}
                style={{ ...inputStyle, ...operatorStyle }}
              />
              <input
                type="button"
                value="."
                onClick={() => this.updateDisplay('.')}
                style={{ ...inputStyle, ...operatorStyle }}
              />
              <input
                type="button"
                value="/"
                onClick={() => this.updateDisplay('/')}
                style={{ ...inputStyle, ...operatorStyle }}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={() => this.updateDisplay('7')}
                style={inputStyle}
              />
              <input
                type="button"
                value="8"
                onClick={() => this.updateDisplay('8')}
                style={inputStyle}
              />
              <input
                type="button"
                value="9"
                onClick={() => this.updateDisplay('9')}
                style={inputStyle}
              />
              <input
                type="button"
                value="*"
                onClick={() => this.updateDisplay('*')}
                style={{ ...inputStyle, ...operatorStyle }}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={() => this.updateDisplay('4')}
                style={inputStyle}
              />
              <input
                type="button"
                value="5"
                onClick={() => this.updateDisplay('5')}
                style={inputStyle}
              />
              <input
                type="button"
                value="6"
                onClick={() => this.updateDisplay('6')}
                style={inputStyle}
              />
              <input
                type="button"
                value="-"
                onClick={() => this.updateDisplay('-')}
                style={{ ...inputStyle, ...operatorStyle }}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={() => this.updateDisplay('1')}
                style={inputStyle}
              />
              <input
                type="button"
                value="2"
                onClick={() => this.updateDisplay('2')}
                style={inputStyle}
              />
              <input
                type="button"
                value="3"
                onClick={() => this.updateDisplay('3')}
                style={inputStyle}
              />
              <input
                type="button"
                value="+"
                onClick={() => this.updateDisplay('+')}
                style={{ ...inputStyle, ...operatorStyle }}
              />
            </div>
            <div>
              <input
                type="button"
                value="00"
                onClick={() => this.updateDisplay('00')}
                style={inputStyle}
              />
              <input
                type="button"
                value="0"
                onClick={() => this.updateDisplay('0')}
                style={inputStyle}
              />
              <input
                type="button"
                value="="
                onClick={this.evaluateExpression}
                style={{ ...inputStyle, ...operatorStyle, ...equalStyle }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
