import React, { Component } from 'react';

class PasswordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  createPassword = () => {
    const length = 12;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!£$%^&*()_+{}~?<>/-=#~";

    const allchr = uppercase + lowercase + number + symbol;

    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
      password += allchr[Math.floor(Math.random() * allchr.length)];
    }

    this.setState({ password });
  };

  copyCode = () => {
    navigator.clipboard.writeText(this.state.password);
  };

  render() {
    const { password } = this.state;
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Generate a <br /> <span style={styles.highlight}>Random password</span>
        </h1>
        <div style={styles.display}>
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            style={styles.input}
          />
          <img
            src="./stickies.svg"
            alt="Copy"
            onClick={this.copyCode}
            style={styles.icon}
          />
        </div>
        <button onClick={this.createPassword} style={styles.button}>
          <img src="./lightning-charge.svg" alt="" style={styles.buttonIcon} /> Generate password
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: '12%',
    width: '90%',
    maxWidth: '700px',
    color: '#fff',
  },
  heading: {
    fontWeight: 500,
    fontSize: '45px',
  },
  highlight: {
    color: '#019f55',
    borderBottom: '4px solid #019f55',
  },
  display: {
    width: '100%',
    marginTop: '50px',
    marginBottom: '30px',
    backgroundColor: '#fff',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '26px 20px',
    borderRadius: '10px',
  },
  input: {
    border: 0,
    outline: 0,
    fontSize: '24px',
    flex: 1,
  },
  icon: {
    width: '30px',
    cursor: 'pointer',
  },
  button: {
    border: 0,
    outline: 0,
    backgroundColor: '#019f55',
    color: '#fff',
    fontSize: '22px',
    fontWeight: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 26px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonIcon: {
    width: '28px',
    marginRight: '10px',
  },
};

export default PasswordGenerator;
