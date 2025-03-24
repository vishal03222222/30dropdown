import React, { Component } from 'react';

class CircularGraph extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>25. CIRCULAR BAR</h2>
        <div className="chart-container" style={styles.chartContainer}>
          <div id="outer" style={styles.outer}>
            <div id="no" style={styles.number}>65%</div>
            <div id="inner" style={styles.inner}></div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" style={styles.svg}>
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" strokeLinecap="round" style={styles.circle} />
        </svg>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    color: 'red',
    margin: '20px auto',
  },
  heading: {
    margin: '0',
    paddingBottom: '20px',
    color: 'red',
    textDecoration: 'underline',
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outer: {
    border: '2px solid black',
    padding: '26px',
    borderRadius: '50%',
    width: '115px',
    height: '110px',
    position: 'relative',
  },
  inner: {
    border: '2px solid black',
    padding: '24px',
    borderRadius: '50%',
    height: '60px',
  },
  number: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    fontWeight: 'bold',
  },
  svg: {
    position: 'absolute',
    top: '70px',
    marginLeft: '4px',
  },
  circle: {
    fill: 'none',
    stroke: 'url(#GradientColor)',
    strokeWidth: '20px',
    strokeDasharray: '472',
    strokeDashoffset: '472',
    animation: 'anim 2s linear forwards',
  },
  '@keyframes anim': {
    '100%': {
      strokeDashoffset: '165',
    },
  },
};

export default CircularGraph;
