import React, { Component } from 'react';
import './darkteme.css'

class Darktheme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false
        };
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            isDarkMode: !prevState.isDarkMode
        }));
    };

    render() {
        return (
            <div className={this.state.isDarkMode ? 'dark-theme' : 'light-theme'}>
                <div id="main1">
                    <h2>Light Mode</h2>
                </div>
                <div id="dark">
                    
                    <div id="main">
                        <h2>Dark Mode </h2>
                    </div>
                    <h1 onClick={this.toggleTheme}>CLICK HERE TO CHANGE </h1><br />
                    <h2 id="dt">DARK THEME</h2>
                </div>
            </div>
        );
    }
}

export default Darktheme;
