import React, { Component } from 'react';
import "../App.css";
import orig_icon from "../assets/original.jpg";
import jona_icon from "../assets/jonatan-pie-3l3RwQdHRHg-unsplash.jpg";
import xMuI_icon from "../assets/1_xMuIOwjliGUPjkzukeWKfw.jpg";

export default class BackGroundChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            backgroundImages: [
                orig_icon,
                jona_icon,
                xMuI_icon,
            ],
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.changeBackground, 3000); // Change background every 3 seconds
    }

    componentWillUnmount() {
        clearInterval(this.intervalId); // Clear interval when the component unmounts
    }

    changeBackground = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % prevState.backgroundImages.length,
        }));
    };

    render() {
        const { backgroundImages, currentIndex } = this.state;
        const backgroundStyle = {
            backgroundImage: `url(${backgroundImages[currentIndex]})`,
            backgroundSize: 'cover', // Optionally add this for better visual effect
            backgroundPosition: 'center', // Optionally add this for centering the background image
            height: '100vh', // Make sure the container takes up the full viewport height
            width: '100%', // Make sure the container takes up the full viewport width
        };

        return (
            <div>
                <div style={{ marginRight: '20px', color: 'green', textAlign: 'center' }}>
                    <h2> Background Change</h2>
                </div>
                <div className="background-container" style={backgroundStyle}>
                    <h1>Background Image Change Effect</h1>
                </div>
            </div>
        );
    }
}
