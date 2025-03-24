import React, { Component } from 'react';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Loading...',
      author: 'Loading...',
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote = async () => {
    try {
      const api_url = "https://api.quotable.io/random";
      const response = await fetch(api_url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      this.setState({
        quote: data.content,
        author: data.author,
      });
    } catch (error) {
      console.error("Fetching the quote failed:", error);
      this.setState({
        quote: "Failed to fetch quote. Please try again later.",
        author: "",
      });
    }
  };

  tweetQuote = () => {
    const { quote, author } = this.state;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} ---- by ${author}`;
    window.open(tweetUrl, "Tweet Window", "width=600, height=300");
  };

  render() {
    const { quote, author } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.quoteBox}>
          <h2 style={styles.title}>Quote of the day</h2>
          <blockquote style={styles.blockquote} id="quote">{quote}</blockquote>
          <span style={styles.author} id="author">{author}</span>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={this.getQuote}>New Quote</button>
            <button style={{ ...styles.button, ...styles.tweetButton }} onClick={this.tweetQuote}>
              <img style={styles.icon} src="Logo_of_Twitter.svg.png" alt="Twitter" />
              Tweet
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#bbc6fa',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteBox: {
    background: '#fff',
    width: '700px',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 10px 20px 0px rgba(0, 0, 0, 0.15)',
  },
  title: {
    fontSize: '32px',
    marginBottom: '40px',
    position: 'relative',
  },
  blockquote: {
    fontSize: '26px',
    minHeight: '110px',
  },
  author: {
    display: 'block',
    marginTop: '10px',
    float: 'right',
    position: 'relative',
  },
  buttonContainer: {
    width: '100%',
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    background: 'rgb(23, 124, 229)',
    color: '#fff',
    borderRadius: '25px',
    border: '1px solid rgb(23, 124, 229)',
    width: '150px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
    cursor: 'pointer',
  },
  tweetButton: {
    backgroundColor: 'transparent',
    color: '#333',
  },
  icon: {
    width: '20px',
    marginRight: '10px',
  },
};

export default QuoteBox;
