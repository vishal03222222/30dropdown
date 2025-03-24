import React, { Component } from 'react';

class SocialMediaDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedApp: 'Select Social Media'
    };
  }

  selectApp = (appName) => {
    this.setState({ selectedApp: appName });
  };

  render() {
    const { selectedApp } = this.state;

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>24. Social Media</h1>
        <div style={styles.dropdown}>
          <button style={styles.dropbtn}>{selectedApp}</button>
          <div style={styles.dropdownContent}>
            <a href="#facebook" onClick={() => this.selectApp('Facebook')} style={styles.link}>Facebook</a>
            <a href="#twitter" onClick={() => this.selectApp('Twitter')} style={styles.link}>Twitter</a>
            <a href="#instagram" onClick={() => this.selectApp('Instagram')} style={styles.link}>Instagram</a>
            <a href="#linkedin" onClick={() => this.selectApp('LinkedIn')} style={styles.link}>LinkedIn</a>
            <a href="#snapchat" onClick={() => this.selectApp('Snapchat')} style={styles.link}>Snapchat</a>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    color: 'red',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    marginLeft: '500px',
    marginTop: '50px',
  },
  dropbtn: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '16px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  link: {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
  },
  linkHover: {
    backgroundColor: '#f1f1f1',
  }
};


styles.dropdownContent.display = 'block';

export default SocialMediaDropdown;
