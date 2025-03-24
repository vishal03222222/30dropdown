import React, { Component } from 'react';

class TextToSpeech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voices: [],
      selectedVoice: null,
      text: ''
    };
  }

  componentDidMount() {
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      this.setState({
        voices: voices,
        selectedVoice: voices[0] // Default to the first voice
      });
    };
  }

  handleVoiceChange = (event) => {
    const selectedVoice = this.state.voices[event.target.value];
    this.setState({ selectedVoice: selectedVoice });
  };

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSpeak = () => {
    const { text, selectedVoice } = this.state;
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = selectedVoice;
    window.speechSynthesis.speak(speech);
  };

  render() {
    return (
      <div style={styles.main}>
        <div style={styles.header}>
          <h2 style={{ color: 'red', textAlign: 'center', textDecoration: 'underline' }}>
            21. Text To Speech Converter
          </h2>
        </div>
        <div>
          <textarea
            id="textarea"
            style={styles.textarea}
            value={this.state.text}
            onChange={this.handleTextChange}
          ></textarea>
        </div>
        <div>
          <h3 style={{ color: 'rgb(66, 30, 210)' }}>Select voice to listen:</h3>
          <select style={styles.select} onChange={this.handleVoiceChange}>
            {this.state.voices.map((voice, index) => (
              <option key={index} value={index}>
                {voice.name}
              </option>
            ))}
          </select>
          <span>
            <button style={styles.button} onClick={this.handleSpeak}>
              <h3>Listen</h3>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    marginLeft: '250px',
    marginTop: '50px',
    padding: '20px'
  },
  textarea: {
    width: '700px',
    height: '300px',
    borderRadius: '10px',
    border: '2px solid black'
  },
  select: {
    width: '500px',
    height: '40px',
    border: '2px solid black',
    borderRadius: '20px',
    color: 'black'
  },
  button: {
    width: '100px',
    borderRadius: '10px',
    backgroundColor: 'rgb(238, 139, 39)',
    height: '40px',
    marginLeft: '50px'
  },
  header: {
    marginRight: '20px',
    textAlign: 'center'
  }
};

export default TextToSpeech;
