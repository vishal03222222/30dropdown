import React, { Component } from 'react';

class ToastNotification extends Component {
  constructor(props) {
    super(props);
    this.toastBoxRef = React.createRef();
    this.successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
    this.errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
    this.invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';
  }

  showToast = (msg) => {
    const toastBox = this.toastBoxRef.current;
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
      toast.classList.add('error');
    }
    if (msg.includes('Invalid')) {
      toast.classList.add('Invalid');
    }

    setTimeout(() => {
      toast.remove();
    }, 6000);
  };

  render() {
    const styles = {
      body: {
        backgroundColor: '#f7edff',
        fontFamily: 'Arial, sans-serif',
      },
      buttons: {
        margin: '50px',
      },
      button: {
        background: '#333',
        color: '#fff',
        border: '0',
        outline: '0',
        width: '120px',
        height: '40px',
        margin: '5px',
        cursor: 'pointer',
      },
      toastBox: {
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: '20px',
      },
      toast: {
        width: '400px',
        height: '80px',
        background: '#fff',
        fontWeight: '500',
        margin: '15px 0',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      },
      icon: {
        margin: '0 20px',
        fontSize: '35px',
        color: 'green',
      },
      iconError: {
        color: 'red',
      },
      iconInvalid: {
        color: 'orange',
      },
      progressBar: {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%',
        height: '5px',
        background: 'green',
        animation: 'anim 5s linear forwards',
      },
      progressBarError: {
        background: 'red',
      },
      progressBarInvalid: {
        background: 'orange',
      },
      '@keyframes anim': {
        '100%': {
          width: '0',
        },
      },
    };

    return (
      <div style={styles.body}>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={() => this.showToast(this.successMsg)}>Success</button>
          <button style={styles.button} onClick={() => this.showToast(this.errorMsg)}>Error</button>
          <button style={styles.button} onClick={() => this.showToast(this.invalidMsg)}>Invalid</button>
        </div>
        <div id="toast-box" style={styles.toastBox} ref={this.toastBoxRef}></div>
      </div>
    );
  }
}

export default ToastNotification;
