import React, { Component } from 'react';
import img7_icon from "../assets/image7.png"
import img8_icon from "../assets/image8.png"
import img9_icon from "../assets/image9.png"

export default class ProductPageDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: './image1.png',
      selectedSize: '',
      selectedColor: '',
      quantity: 1,
    };
  }

  handleImageChange = (image) => {
    this.setState({ selectedImage: image });
  };

  handleSizeChange = (event) => {
    this.setState({ selectedSize: event.target.value });
  };

  handleColorChange = (event) => {
    this.setState({ selectedColor: event.target.value });
  };

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  render() {
    return (
      <div>
        <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
          <h2>Product-Page-Design for Website</h2>
        </div>

        <div className="container" style={{ display: 'flex' }}>
          <div className="product">
            <div className="gallery" style={{ backgroundColor: 'black', display: 'flex' }}>
              <img src={this.state.selectedImage} id="productimg" alt="Product" />

              <div className="controls" style={{ margin: '20px', margin: '10px' }}>
                <h4
                  className="btn"
                  style={{ backgroundColor: 'aqua', margin: '20px', cursor: 'pointer' }}
                  onClick={() => this.handleImageChange(img7_icon)}
                >
                  1st view
                </h4>

                <h4
                  className="btn"
                  style={{ backgroundColor: 'aqua', margin: '20px', cursor: 'pointer' }}
                  onClick={() => this.handleImageChange(img8_icon)}
                >
                  2nd view
                </h4>

                <h4
                  className="btn"
                  style={{ backgroundColor: 'aqua', margin: '20px', cursor: 'pointer' }}
                  onClick={() => this.handleImageChange(img9_icon)}
                >
                  3rd view
                </h4>
              </div>

              <div id="details" style={{ backgroundColor: 'white', margin: '40px', padding: '50px' }}>
                <h1>Casual T-Shirt</h1>
                <h1>$15.00</h1>
                <h3 style={{ color: 'green' }}>30% OFF</h3>
                <p>
                  WRANGLER IS AN AMERICAN MANUFACTURER OF <br />
                  JEANS AND OTHER CLOTHING ITEMS PARTICULARLY <br />
                  WORKWEAR
                </p>

                <form>
                  <div className="size" style={{ marginLeft: '10px', display: 'flex' }}>
                    <span style={{ marginRight: '20px' }}>Size: </span>

                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <label key={size}>
                        <span>{size}</span>
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          onChange={this.handleSizeChange}
                          style={{ marginRight: '20px' }}
                        />
                      </label>
                    ))}
                  </div>
                </form>

                <form>
                  <div className="colorselect" style={{ marginLeft: '10px', display: 'flex' }}>
                    <span id="this" style={{ marginRight: '20px' }}>
                      Color:
                    </span>

                    {[
                      { id: 'red', color: 'red' },
                      { id: 'orange', color: 'orange' },
                      { id: 'black', color: 'black' },
                      { id: 'pink', color: 'pink' },
                      { id: 'blue', color: 'rgb(5, 5, 151)' },
                    ].map((color) => (
                      <label key={color.id}>
                        <input
                          type="radio"
                          name="color"
                          value={color.id}
                          onChange={this.handleColorChange}
                          style={{ display: 'none' }}
                        />
                        <span
                          style={{
                            backgroundColor: color.color,
                            marginLeft: '20px',
                            marginRight: '20px',
                            display: 'inline-block',
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                          }}
                        ></span>
                      </label>
                    ))}
                  </div>
                </form>

                <div>
                  <form>
                    <label style={{ marginLeft: '11px' }}>Quantity</label>
                    <input
                      type="number"
                      value={this.state.quantity}
                      onChange={this.handleQuantityChange}
                      style={{ width: '30px', borderRadius: '20px', margin: '10px' }}
                    />
                  </form>
                </div>

                <h3
                  style={{
                    marginLeft: '100px',
                    padding: '10px',
                    width: '150px',
                    textAlign: 'center',
                    backgroundColor: 'aqua',
                    border: '2px solid black',
                    borderRadius: '30px',
                    cursor: 'pointer',
                  }}
                >
                  BUY NOW
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
