import React, { Component, createRef } from "react";
import "../App.css";
import image1_icon from "../assets/image-1.png";
import image2_icon from "../assets/image-2.png";
import image3_icon from "../assets/image-3.png";
import image4_icon from "../assets/image-4.png";
import image5_icon from "../assets/image-5.png";
import image6_icon from "../assets/image-6.png";

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.scrollContainer = createRef();
  }

  handleNext = () => {
    this.scrollContainer.current.style.scrollBehavior = "smooth";
    this.scrollContainer.current.scrollLeft += 900;
  };

  handleBack = () => {
    this.scrollContainer.current.style.scrollBehavior = "smooth";
    this.scrollContainer.current.scrollLeft -= 900;
  };

  render() {
    return (
      <div
        style={{
          margin: "10% auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="./back.png"
          alt="Back"
          onClick={this.handleBack}
          style={{ width: "50px", cursor: "pointer", margin: "50px" }}
        />
        <div className="gallery" ref={this.scrollContainer}>
          <div>
            <img src={image1_icon} alt="Image 1" />
            <img src={image2_icon} alt="Image 2" />
            <img src={image3_icon} alt="Image 3" />
          </div>
          <div>
            <img src={image4_icon} alt="Image 4" />
            <img src={image5_icon} alt="Image 5" />
            <img src={image6_icon} alt="Image 6" />
          </div>
        </div>
        <img
          src="./next.png"
          alt="Next"
          onClick={this.handleNext}
          style={{ width: "50px", cursor: "pointer", margin: "50px" }}
        />
      </div>
    );
  }
}
