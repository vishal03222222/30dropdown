import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  componentDidMount() {
    this.startCountdown();
  }

  startCountdown = () => {
    const countDownDate = new Date('Jan 30, 2025 00:00:00').getTime();

    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.setState({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0'),
        });
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = {
      main: {
        border: '2px solid black',
        padding: '20px',
        marginLeft: '480px',
        marginTop: '50px',
        width: '250px',
        backgroundColor: 'aliceblue',
        display: 'flex',
        justifyContent: 'space-between',
      },
      web: {
        width: '60px',
        height: 'auto',
        padding: '5px',
        textAlign: 'center',
      },
      days: {
        backgroundColor: 'rgb(191, 191, 209)',
        color: 'rgb(19, 17, 17)',
      },
      timeBlock: {
        backgroundColor: 'black',
        color: 'white',
      },
    };

    return (
      <div>
        <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
          <h2>Countdown Timer for the Date Jan 30, 2025</h2>
        </div>

        <div id="main" style={styles.main}>
          <div className="web" style={{ ...styles.web, ...styles.days }}>
            <span>Days</span>
            <h1 id="days">{this.state.days}</h1>
          </div>
          <div className="web" style={{ ...styles.web, ...styles.timeBlock }}>
            <span>Hours</span>
            <h1 id="hours">{this.state.hours}</h1>
          </div>
          <div className="web" style={{ ...styles.web, ...styles.timeBlock }}>
            <span>Minutes</span>
            <h1 id="minutes">{this.state.minutes}</h1>
          </div>
          <div className="web" style={{ ...styles.web, ...styles.timeBlock }}>
            <span>Seconds</span>
            <h1 id="seconds">{this.state.seconds}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
