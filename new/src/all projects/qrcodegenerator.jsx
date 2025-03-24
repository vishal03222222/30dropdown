//  import React, { Component } from 'react';

// class QRCodeGenerator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       qrText: '',
//       qrImageSrc: '',
//       showError: false,
//       imageBase64: '',
//     };
//   }

//   generateQR = () => {
//     const { qrText, imageBase64 } = this.state;
//     const dataToEncode = imageBase64 || qrText;
    
//     if (dataToEncode.length > 0) {
//       this.setState({
//         qrImageSrc: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(dataToEncode)}`,
//         showError: false,
//       });
//     } else {
//       this.setState({ showError: true });
//       setTimeout(() => {
//         this.setState({ showError: false });
//       }, 1000);
//     }
//   };

//   handleTextChange = (e) => {
//     this.setState({ qrText: e.target.value });
//   };

//   handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         this.setState({ imageBase64: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   render() {
//     const { qrText, qrImageSrc, showError } = this.state;

//     const containerStyle = {
//       width: '400px',
//       padding: '25px 35px',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       backgroundColor: '#fff',
//       borderRadius: '10px',
//       position: 'absolute',
//     };

//     const inputStyle = {
//       width: '100%',
//       height: '50px',
//       border: '1px solid #494eca',
//       outline: 'none',
//       padding: '10px',
//       margin: '10px 0 20px',
//       borderRadius: '5px',
//       animation: showError ? 'shake 0.1s linear 10' : 'none',
//     };

//     const imgBoxStyle = {
//       width: '200px',
//       borderRadius: '5px',
//       maxHeight: qrImageSrc ? '300px' : '0',
//       overflow: 'hidden',
//       transition: 'max-height 1s',
//       margin: qrImageSrc ? '10px auto' : '0 auto',
//       border: qrImageSrc ? '1px solid #d1d1d1' : 'none',
//     };

//     const buttonStyle = {
//       width: '100%',
//       height: '50px',
//       backgroundColor: '#494eea',
//       color: '#fff',
//       border: 'none',
//       outline: 'none',
//       borderRadius: '5px',
//       boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
//     };

//     return (
//       <div style={containerStyle}>
//         <p>Enter your text or URL</p>
//         <input
//           type="text"
//           placeholder="Text or URL"
//           value={qrText}
//           onChange={this.handleTextChange}
//           style={inputStyle}
//         />
//         <p>Or upload an image</p>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={this.handleImageChange}
//           style={inputStyle}
//         />
//         <div style={imgBoxStyle}>
//           <img src={qrImageSrc} alt="QR Code" style={{ width: '100%', padding: '10px' }} />
//         </div>
//         <button onClick={this.generateQR} style={buttonStyle}>
//           Generate QR Code
//         </button>
//       </div>
//     );
//   }
// }

// export default QRCodeGenerator;
import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class QRCodeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>QR Code Generator</h1>
        <input
          type="file"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter text here"
          style={{
            padding: '10px',
            width: '300px',
            marginBottom: '20px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <div style={{ marginTop: '20px' }}>
          {text && (
            <QRCode
              value={text}
              size={256}
              level={'H'}
              includeMargin={true}
              style={{ border: '1px solid #000' }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default QRCodeGenerator;

