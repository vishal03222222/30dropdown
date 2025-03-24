import React, { Component } from 'react';

class PopupDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    const { isPopupOpen } = this.state;

    const containerStyle = {
      width: '100%',
      height: '100vh',
      background: '#3c5077',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const btnStyle = {
      padding: '10px 60px',
      background: '#fff',
      border: '0',
      outline: 'none',
      cursor: 'pointer',
      fontSize: '25px',
      fontWeight: '500',
      borderRadius: '30px',
    };

    const popupStyle = {
      width: '400px',
      borderRadius: '6px',
      background: '#fff',
      position: 'absolute',
      top: isPopupOpen ? '50%' : '0',
      left: '50%',
      transform: isPopupOpen
        ? 'translate(-50%, -50%) scale(1)'
        : 'translate(-50%, -50%) scale(0.1)',
      textAlign: 'center',
      padding: '0 30px 30px',
      color: '#333',
      visibility: isPopupOpen ? 'visible' : 'hidden',
      transition: 'transform 0.4s, top 0.4s',
    };

    const imgStyle = {
      width: '100px',
      borderRadius: '50%',
      marginTop: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    };

    const h2Style = {
      fontSize: '38px',
      fontWeight: '500',
      margin: '30px 0 10px',
    };

    const buttonStyle = {
      width: '100%',
      marginTop: '50px',
      padding: '10px 0',
      background: '#6fd649',
      color: '#fff',
      border: '0',
      outline: 'none',
      fontSize: '18px',
      borderRadius: '4px',
      cursor: 'pointer',
      boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
    };

    return (
      <div style={containerStyle}>
        <button style={btnStyle} onClick={this.openPopup}>
          Submit
        </button>
        <div style={popupStyle}>
          <img src="./check-circle.svg" alt="check-circle" style={imgStyle} />
          <h2 style={h2Style}>Thank You</h2>
          <p>Your details have been successfully submitted. Thanks!</p>
          <button style={buttonStyle} onClick={this.closePopup}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default PopupDesign;
