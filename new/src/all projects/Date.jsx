import React, { Component } from "react";

class DateTimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      date: "",
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
    const formattedDate = currentTime.toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    this.setState({
      hours: String(currentTime.getHours()).padStart(2, "0"),
      minutes: String(currentTime.getMinutes()).padStart(2, "0"),
      seconds: String(currentTime.getSeconds()).padStart(2, "0"),
      date: formattedDate,
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.animatedBackground}></div>
        <h1 style={styles.title}>Digital Clock</h1>
        <div style={styles.dateContainer}>{this.state.date}</div>
        <div style={styles.timerContainer}>
          <span style={styles.timeBox}>{this.state.hours}</span>
          <span style={styles.colon}>:</span>
          <span style={styles.timeBox}>{this.state.minutes}</span>
          <span style={styles.colon}>:</span>
          <span style={styles.timeBox}>{this.state.seconds}</span>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    background: "#0c1022",
  },
  animatedBackground: {
    position: "absolute",
    width: "200%",
    height: "200%",
    background: "linear-gradient(135deg, #ff416c, #007bff, #1a1a2e)",
    animation: "moveBackground 6s infinite linear",
    filter: "blur(80px)",
    zIndex: "-1",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "20px",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
  },
  dateContainer: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: "20px",
    background: "rgba(255, 255, 255, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
  },
  timerContainer: {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(90deg, #ff416c, #007bff)",
    padding: "20px 40px",
    borderRadius: "15px",
    boxShadow: "0 0 20px rgba(255, 65, 108, 0.6)",
  },
  timeBox: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#ffffff",
    background: "rgba(255, 255, 255, 0.2)",
    padding: "10px 20px",
    borderRadius: "10px",
    margin: "0 10px",
  },
  colon: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#ffffff",
  },
};

// Adding the animation dynamically using a style tag
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  @keyframes moveBackground {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(-50px) translateY(-50px); }
    100% { transform: translateX(0) translateY(0); }
  }
`;
document.head.appendChild(styleTag);

export default DateTimeDisplay;
