import React, { Component } from 'react';

class ImageSearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      page: 1,
      results: [],
    };
  }

  searchImages = async () => {
    const { keyword, page } = this.state;
    const accessKey = 'xfHagP0SZyySBvsb6hjF6GkZEqIkSzL49koWS4XhRY0';
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (page === 1) {
      this.setState({ results: data.results });
    } else {
      this.setState((prevState) => ({
        results: [...prevState.results, ...data.results],
      }));
    }
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.setState({ page: 1 }, this.searchImages);
  };

  handleShowMore = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.searchImages
    );
  };

  handleInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    return (
      <div>
        <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
          <h2>30. Search Engine</h2>
        </div>
        <form id="search-form" style={{ marginLeft: '500px', marginTop: '50px' }} onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            id="search-box"
            placeholder="search to get images"
            value={this.state.keyword}
            onChange={this.handleInputChange}
          />
          <button style={styles.searchButton}>Search</button>
        </form>
        <div id="search-result" style={styles.searchResult}>
          {this.state.results.map((result) => (
            <a key={result.id} href={result.links.html} target="_blank" rel="noopener noreferrer">
              <img src={result.urls.small} alt={result.alt_description} style={styles.image} />
            </a>
          ))}
        </div>
        {this.state.results.length > 0 && (
          <button style={styles.showMoreButton} onClick={this.handleShowMore}>
            Show More
          </button>
        )}
      </div>
    );
  }
}

const styles = {
  searchResult: {
    width: '50%',
    margin: '100px auto 50px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '40px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  searchButton: {
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: 'blue',
    color: 'wheat',
  },
  showMoreButton: {
    padding: '10px',
    marginLeft: '550px',
    borderRadius: '20px',
    backgroundColor: 'burlywood',
    display: 'block',
  },
};

export default ImageSearchApp;
