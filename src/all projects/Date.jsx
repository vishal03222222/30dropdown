import React, { Component } from 'react';

class DateTimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
      date: '',
      month: '',
      year: ''
    };
  }

  componentDidMount() {
    this.updateTime();
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTime = () => {
    const currentTime = new Date();
    this.setState({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      date: currentTime.getDate(),
      month: currentTime.getMonth() + 1, // Months are zero-based
      year: currentTime.getFullYear()
    });
  };

  render() {
    return (
      <div>
        <h1 id="title" style={styles.title}>DATE AND TIME</h1>
        <div className="timer" style={styles.timer}>
          <div style={{ marginRight: '20px', color: 'red' }}>
            <h3>Date:</h3>
          </div>
          <div id="box4">
            <h2 id="date">{this.state.date}</h2>
          </div>
          <div id="box5">
            <h2 id="mon">{this.state.month}:</h2>
          </div>
          <div id="box6">
            <h2 id="year">{this.state.year}:</h2>
          </div>
        </div>

        <div className="timer" style={styles.timer}>
          <div style={{ marginRight: '20px', color: 'red' }}>
            <h3>28. Date and Time:</h3>
          </div>
          <div id="box1">
            <h2 id="hrs">{this.state.hours}:</h2>
          </div>
          <div id="box2">
            <h2 id="min">{this.state.minutes}:</h2>
          </div>
          <div id="box3">
            <h2 id="sec">{this.state.seconds}</h2>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    color: 'red',
    textAlign: 'center',
    textDecoration: 'underline'
  },
  timer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50px',
    marginLeft: '450px'
  },
  timerDiv: {
    width: '100px',
    fontSize: 'xx-large'
  }
};

export default DateTimeDisplay;
