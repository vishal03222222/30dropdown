import React, { Component } from 'react';
import image1 from "./image1";
import image2 from "./image2";
import image3 from "./image3";


class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: image1,
    };
  }

  changeImage = (image) => {
    this.setState({ selectedImage: image });
  };

  render() {
    const styles = {
      colorSelectSpan: {
        display: 'inline-block',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        scrollMarginRight: '15px',
        cursor: 'pointer',
      },
      colorSelectInput: {
        display: 'none',
      },
      colorSelectInputChecked: {
        transform: 'scale(0.7)',
        boxShadow: '0 0 0 4px #fff, 0 0 0 6px #0f0202',
      },
      container: {
        display: 'flex',
      },
      gallery: {
        backgroundColor: 'black',
        display: 'flex',
      },
      controls: {
        margin: '20px',
      },
      btn: {
        backgroundColor: 'aqua',
        margin: '20px',
        padding: '10px',
        cursor: 'pointer',
      },
      details: {
        backgroundColor: 'white',
        margin: '40px',
        padding: '50px',
      },
      size: {
        display: 'flex',
        marginLeft: '10px',
      },
      colorSelect: {
        display: 'flex',
        marginLeft: '10px',
      },
      quantityInput: {
        width: '30px',
        borderRadius: '20px',
        margin: '10px',
      },
      buyNowButton: {
        marginLeft: '100px',
        padding: '10px',
        width: '150px',
        textAlign: 'center',
        backgroundColor: 'aqua',
        border: '2px solid black',
        borderRadius: '30px',
        cursor: 'pointer',
      },
    };

    return (
      <div>
        <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
          <h2>26. E-commerce Website</h2>
        </div>

        <div className="container" style={styles.container}>
          <div className="product">
            <div className="gallery" style={styles.gallery}>
              <img src={this.state.selectedImage} id="productimg" alt="Product" />

              <div className="controls" style={styles.controls}>
                <h4
                  className="btn"
                  style={styles.btn}
                  onClick={() => this.changeImage('./image1.png')}
                >
                  1st view
                </h4>

                <h4
                  className="btn"
                  style={styles.btn}
                  onClick={() => this.changeImage('./image2.png')}
                >
                  2nd view
                </h4>

                <h4
                  className="btn"
                  style={styles.btn}
                  onClick={() => this.changeImage('./image3.png')}
                >
                  3rd view
                </h4>
              </div>

              <div id="details" style={styles.details}>
                <h1>Casual T-Shirt</h1>
                <h1>$15.00</h1>
                <h3 style={{ color: 'green' }}>30% OFF</h3>
                <p>
                  WRANGLER IS AN AMERICAN MANUFACTURER OF <br />
                  JEANS AND OTHER CLOTHING ITEMS PARTICULARLY <br />
                  WORKWEAR
                </p>

                <form>
                  <div className="size" style={styles.size}>
                    <span style={{ marginRight: '20px' }}>Size:</span>
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <label key={size}>
                        <span>{size}</span>
                        <input
                          type="radio"
                          name="size"
                          id={size}
                          style={{ marginRight: '20px' }}
                        />
                      </label>
                    ))}
                  </div>
                  <br />
                </form>

                <form>
                  <div className="colorselect" style={styles.colorSelect}>
                    <span id="this" style={{ marginRight: '20px' }}>
                      Color:
                    </span>
                    {['red', 'orange', 'black', 'pink', 'blue'].map((color) => (
                      <label key={color}>
                        <input
                          type="radio"
                          name="color"
                          id={color}
                          style={styles.colorSelectInput}
                        />
                        <span
                          id={`color-${color}`}
                          style={{
                            ...styles.colorSelectSpan,
                            backgroundColor: color,
                            marginLeft: '20px',
                            marginRight: '20px',
                          }}
                        ></span>
                      </label>
                    ))}
                  </div>
                </form>

                <div>
                  <form>
                    <label style={{ marginLeft: '11px' }}>Quantity</label>
                    <input type="number" style={styles.quantityInput} />
                  </form>
                </div>

                <h3 style={styles.buyNowButton}>BUY NOW</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
