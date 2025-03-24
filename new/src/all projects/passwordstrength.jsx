import React, { Component } from 'react';

class PasswordStrengthChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      strength: ''
    };
  }

  checkPasswordStrength = () => {
    const { password } = this.state;
    let strength = 0;

    if (password.length >= 8) {
      strength += 1;
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      } else if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (char >= '0' && char <= '9') {
        hasNumber = true;
      } else {
        hasSpecialChar = true;
      }
    }

    if (hasUppercase) {
      strength += 1;
    }

    if (hasLowercase) {
      strength += 1;
    }

    if (hasNumber) {
      strength += 1;
    }

    if (hasSpecialChar) {
      strength += 1;
    }

    let strengthText = '';
    if (strength <= 2) {
      strengthText = 'Weak';
    } else if (strength === 3) {
      strengthText = 'Medium';
    } else if (strength >= 4) {
      strengthText = 'Strong';
    }

    this.setState({ strength: strengthText });
  };

  handleChange = (event) => {
    this.setState({ password: event.target.value }, this.checkPasswordStrength);
  };

  render() {
    const { strength } = this.state;

    return (
      <div style={styles.container}>
        <h2 style={styles.title}>19. Password Strength Testing</h2>
        <div style={styles.block}>
          <div>
            <label htmlFor="password">Enter your password:</label>
            <input
              type="password"
              id="password"
              style={styles.input}
              onChange={this.handleChange}
            />
          </div>
          <div
            id="strengthIndicator"
            style={{
              ...styles.strength,
              ...(strength === 'Weak'
                ? styles.weak
                : strength === 'Medium'
                ? styles.medium
                : strength === 'Strong'
                ? styles.strong
                : {}),
            }}
          >
            Strength: {strength}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
  },
  title: {
    marginRight: '20px',
    color: 'red',
  },
  block: {
    marginLeft: '400px',
    marginTop: '50px',
    width: '500px',
    height: 'auto',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  strength: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
  weak: {
    color: 'red',
  },
  medium: {
    color: 'orange',
  },
  strong: {
    color: 'green',
  },
};

export default PasswordStrengthChecker;
