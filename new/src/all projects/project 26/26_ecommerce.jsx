import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Assuming you move your CSS to a separate file

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: './image1.png', // Default image
    };
  }

  changeImage = (image) => {
    this.setState({ imageSrc: image });
  };

  render() {
    return (
      <div>
        <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
          <h2>26. E-commerce Website</h2>
        </div>

        <div className="container" style={{ display: 'flex' }}>
          <div className="product">
            <div className="gallery" style={{ backgroundColor: 'black', display: 'flex' }}>
              <img src={this.state.imageSrc} id="productimg" alt="Product" />

              <div className="controls" style={{ margin: '10px' }}>
                <h4
                  className="btn"
                  style={{ backgroundColor: 'aqua', margin: '20px', cursor: 'pointer' }}
                  onClick={() => this.changeImage('./image1.png')}
                >
                  1st view
                </h4>
                <h4
                  className="btn"
                  style={{ backgroundColor: 'aqua', margin: '20px', cursor: 'pointer' }}
                  onClick={() => this.changeImage('./image2.png')}
                >
                  2nd view
                </h4>
                <h4
                  className="btn"
                  style={{ backgroundColor: 'aqua', margin: '20px', cursor: 'pointer' }}
                  onClick={() => this.changeImage('./image3.png')}
                >
                  3rd view
                </h4>
              </div>

              <div id="details" style={{ backgroundColor: 'white', margin: '40px', padding: '50px' }}>
                <h1>Casual T-shirt</h1>
                <h1>$15.00</h1>
                <h3 style={{ color: 'green' }}>30% OFF</h3>
                <p>
                  WRANGLER IS AN AMERICAN MANUFACTURER OF <br />
                  JEANS AND OTHER CLOTHING ITEMS PARTICULARLY <br />
                  WORKWEAR
                </p>

                <form>
                  <div className="size" style={{ marginLeft: '10px', display: 'flex' }}>
                    <span style={{ marginRight: '20px' }}>Size:</span>
                    <label htmlFor="small">
                      <span>S</span>
                      <input type="radio" name="size" id="small" style={{ marginRight: '20px' }} />
                    </label>
                    <label htmlFor="medium">
                      <span>M</span>
                      <input type="radio" name="size" id="medium" style={{ marginRight: '20px' }} />
                    </label>
                    <label htmlFor="large">
                      <span>L</span>
                      <input type="radio" name="size" id="large" style={{ marginRight: '20px' }} />
                    </label>
                    <label htmlFor="XL">
                      <span>XL</span>
                      <input type="radio" name="size" id="XL" style={{ marginRight: '20px' }} />
                    </label>
                    <label htmlFor="XXL">
                      <span>XXL</span>
                      <input type="radio" name="size" id="XXL" />
                    </label>
                  </div>
                  <br />
                </form>

                <form>
                  <div className="colorselect" style={{ marginLeft: '10px', display: 'flex' }}>
                    <span id="this" style={{ marginRight: '20px' }}>Color:</span>
                    <label htmlFor="red">
                      <input type="radio" name="color" id="red" />
                      <span id="color-red" style={{ backgroundColor: 'red', marginLeft: '20px', marginRight: '20px' }}></span>
                    </label>
                    <label htmlFor="orange">
                      <input type="radio" name="color" id="orange" />
                      <span id="color-orange" style={{ background: 'orange', marginRight: '20px' }}></span>
                    </label>
                    <label htmlFor="black">
                      <input type="radio" name="color" id="black" />
                      <span id="color-black" style={{ background: 'black', marginRight: '20px' }}></span>
                    </label>
                    <label htmlFor="pink">
                      <input type="radio" name="color" id="pink" />
                      <span id="color-pink" style={{ background: 'pink', marginRight: '20px' }}></span>
                    </label>
                    <label htmlFor="blue">
                      <input type="radio" name="color" id="blue" />
                      <span id="color-blue" style={{ background: 'rgb(5, 5, 151)' }}></span>
                    </label>
                  </div>
                </form>

                <div>
                  <form>
                    <label style={{ marginLeft: '11px' }}>Quantity</label>
                    <input type="number" style={{ width: '60px', borderRadius: '20px', margin: '10px' }} />
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
                    cursor: 'pointer'
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

ReactDOM.render(<ProductPage />, document.getElementById('root'));
