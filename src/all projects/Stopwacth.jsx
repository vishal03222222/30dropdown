import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            timer: null
        };
    }

  
    updateStopwatch = () => {
        this.setState(prevState => {
            let { seconds, minutes, hours } = prevState;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            return { seconds, minutes, hours };
        });
    };

  
    start = () => {
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }
        const timer = setInterval(this.updateStopwatch, 1000);
        this.setState({ timer });
    };

    stop = () => {
        clearInterval(this.state.timer);
        this.setState({ timer: null });
    };

    reset = () => {
        clearInterval(this.state.timer);
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0,
            timer: null
        });
    };

    formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

    render() {
        const { seconds, minutes, hours } = this.state;
        const displayTime = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;

        return (
            <div style={styles.stopwatch}>
                <h1 style={styles.displayTime}>{displayTime}</h1>
                <div style={styles.buttonContainer}>
                    <img
                        src="./app.svg"
                        alt="Stop"
                        onClick={this.stop}
                        style={styles.button}
                    />
                    <img
                        src="./play-circle (1).svg"
                        alt="Start"
                        onClick={this.start}
                        style={styles.button}
                    />
                    <img
                        src="./arrow-clockwise.svg"
                        alt="Reset"
                        onClick={this.reset}
                        style={styles.button}
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    stopwatch: {
        width: '90%',
        maxWidth: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '2px solid',
        textAlign: 'center',
        padding: '50px 0',
        boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)',
        margin: '200px auto 0',
        backgroundColor: '#edeaff'
    },
    displayTime: {
        fontSize: '64px',
        marginTop: '50px',
        fontWeight: '600'
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '50px',
        margin: '0 20px',
        cursor: 'pointer'
    }
};

export default Stopwatch;
