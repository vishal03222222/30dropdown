import React, { Component } from 'react';

class EmailResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzil6gtA73tBDAzmfkru7WkEamYW2ahE84i86OAdcyrx2kN3SqMk38xn028fEgLEJDl/exec';
    const formData = new FormData();
    formData.append('email', this.state.email);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        this.setState({ message: 'Thanks for subscribing' });
        setTimeout(() => {
          this.setState({ message: '' });
        }, 5000);
        this.setState({ email: '' });
      })
      .catch(error => console.error('Error!', error.message));
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 style={styles.title}>18. Email response</h2>
        <div id="main" style={styles.main}>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>subscribe</button>
          </form>
          <span id="msg" style={styles.message}>{this.state.message}</span>
          <h4 id="msg1">To verify <a style={styles.link} href="https://docs.google.com/spreadsheets/d/1pxqGZ55DKOEMInwysQwFXdHYcsqk6O1MsqEdtCUQLMI/edit?gid=0#gid=0">click here</a></h4>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    color: 'red',
    textAlign: 'center',
    textDecoration: 'underline',
    marginBottom: '20px'
  },
  main: {
    marginLeft: '500px',
    marginTop: '50px'
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '10px',
    color: 'green'
  },
  link: {
    color: 'red'
  }
};

export default EmailResponseForm;
