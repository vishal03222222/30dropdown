import React, { Component } from 'react';

class QRCodeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrText: '',
      qrImageSrc: '',
      showError: false,
    };
  }

  generateQR = () => {
    const { qrText } = this.state;
    if (qrText.length > 0) {
      this.setState({
        qrImageSrc: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`,
        showError: false,
      });
    } else {
      this.setState({ showError: true });
      setTimeout(() => {
        this.setState({ showError: false });
      }, 1000);
    }
  };

  handleChange = (e) => {
    this.setState({ qrText: e.target.value });
  };

  render() {
    const { qrText, qrImageSrc, showError } = this.state;

    const containerStyle = {
      width: '400px',
      padding: '25px 35px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      borderRadius: '10px',
      position: 'absolute',
    };

    const inputStyle = {
      width: '100%',
      height: '50px',
      border: '1px solid #494eca',
      outline: 'none',
      padding: '10px',
      margin: '10px 0 20px',
      borderRadius: '5px',
      animation: showError ? 'shake 0.1s linear 10' : 'none',
    };

    const imgBoxStyle = {
      width: '200px',
      borderRadius: '5px',
      maxHeight: qrImageSrc ? '300px' : '0',
      overflow: 'hidden',
      transition: 'max-height 1s',
      margin: qrImageSrc ? '10px auto' : '0 auto',
      border: qrImageSrc ? '1px solid #d1d1d1' : 'none',
    };

    const buttonStyle = {
      width: '100%',
      height: '50px',
      backgroundColor: '#494eea',
      color: '#fff',
      border: 'none',
      outline: 'none',
      borderRadius: '5px',
      boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
    };

    return (
      <div style={containerStyle}>
        <p>Enter your text or URL</p>
        <input
          type="text"
          placeholder="Text or URL"
          value={qrText}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <div style={imgBoxStyle}>
          <img src={qrImageSrc} alt="QR Code" style={{ width: '100%', padding: '10px' }} />
        </div>
        <button onClick={this.generateQR} style={buttonStyle}>
          Generate QR Code
        </button>
      </div>
    );
  }
}

export default QRCodeGenerator;
