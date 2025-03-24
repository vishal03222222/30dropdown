import React, { Component } from 'react';

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNo: '',
      emailId: '',
      message: '',
      errors: {
        nameError: '',
        phoneError: '',
        emailError: '',
        messageError: ''
      }
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    const { fullName, phoneNo, emailId, message } = this.state;
    const errors = {};

    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{3}\d{3}\d{4}$/;

    if (fullName === '' || !namePattern.test(fullName)) {
      errors.nameError = 'Name invalid. Only letters and spaces allowed.';
    }
    if (phoneNo === '' || !phonePattern.test(phoneNo)) {
      errors.phoneError = 'Phone number invalid';
    }
    if (emailId === '' || !emailPattern.test(emailId)) {
      errors.emailError = 'Email invalid';
    }
    if (message === '' || message.length <= 30) {
      errors.messageError = 'Message must be at least 30 characters long.';
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();

    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      // You can add form submission logic here
      this.setState({
        fullName: '',
        phoneNo: '',
        emailId: '',
        message: '',
        errors: {}
      });
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { fullName, phoneNo, emailId, message, errors } = this.state;

    return (
      <div style={styles.container}>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <h2 style={styles.header}>Form validation</h2>
          <label style={styles.label} htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            value={fullName}
            onChange={this.handleChange}
            style={styles.input}
          />
          <span style={styles.error}>{errors.nameError}</span>
          
          <label style={styles.label} htmlFor="phoneNo">Phone No.</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            placeholder="123 456 7890"
            value={phoneNo}
            onChange={this.handleChange}
            style={styles.input}
          />
          <span style={styles.error}>{errors.phoneError}</span>
          
          <label style={styles.label} htmlFor="emailId">Email ID</label>
          <input
            type="text"
            id="emailId"
            name="emailId"
            placeholder="Enter your email"
            value={emailId}
            onChange={this.handleChange}
            style={styles.input}
          />
          <span style={styles.error}>{errors.emailError}</span>
          
          <label style={styles.label} htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={this.handleChange}
            style={styles.textarea}
          />
          <span style={styles.error}>{errors.messageError}</span>
          
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0
  },
  form: {
    backgroundColor: '#34495e',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px'
  },
  header: {
    marginRight: '20px',
    color: 'red',
    textAlign: 'center'
  },
  label: {
    display: 'block',
    margin: '10px 0 5px'
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    height: '80px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#e74c3c',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px'
  },
  error: {
    color: '#e74c3c'
  }
};

export default FormValidation;
