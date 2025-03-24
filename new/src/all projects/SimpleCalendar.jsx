import React, { Component } from 'react';

class SimpleCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      day: '',
      year: '',
      month: '',
    };
  }

  componentDidMount() {
    this.updateTime();
    this.timerID = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime = () => {
    const currentTime = new Date();
    const daysOfWeek = ["", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this.setState({
      date: currentTime.getDate(),
      day: daysOfWeek[currentTime.getDay()],
      year: currentTime.getFullYear(),
      month: monthsOfYear[currentTime.getMonth()],
    });
  };

  render() {
    const { date, day, year, month } = this.state;

    return (
      <div>
        <u style={{ color: 'red' }}>
          <h1 style={{ color: 'rgb(0, 76, 255)', textAlign: 'center' }} id="title">
            Simple Calendar
          </h1>
        </u>
        <div id="c1" style={styles.container}>
          <div id="c2" style={styles.leftPanel}>
            <h2 id="date" style={{ textAlign: 'center' }}>{date}</h2>
            <h2 id="days">{day}</h2>
          </div>
          <div id="c3" style={styles.rightPanel}>
            <h2 id="year" style={{ textAlign: 'center' }}>{year}</h2>
            <h2 id="yearname">{month}</h2>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginLeft: '720px',
    marginRight:'750px',
    marginTop: '150px',
    display: 'flex',
    border: '2px solid black',
  },
  leftPanel: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
  },
  rightPanel: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
  },
};

export default SimpleCalendar;
