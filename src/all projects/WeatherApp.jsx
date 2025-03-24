import React, { Component } from 'react';

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weatherData: null,
      error: '',
    };
  }

  fetchWeatherData = async () => {
    this.setState({ error: '' });  // Reset any previous error
    try {
      const response = await fetch(
        `https://yahoo-weather5.p.rapidapi.com/weather?location=${this.state.city}&format=json&u=f`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '2a5f5c3301msh25a5b13be667fcfp1e078djsn0a8478fc4d00',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      this.setState({ weatherData: data });
    } catch (error) {
      this.setState({ error: 'Error fetching weather data. Please check your API key or try again later.' });
      console.error('Error:', error);
    }
  };

  handleInputChange = (e) => {
    this.setState({ city: e.target.value });
  };

  render() {
    const { city, weatherData, error } = this.state;

    return (
      <div>
        <u>
          <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
            <h2>1. Weather Info</h2>
          </div>
        </u>

        <h1 style={{ textAlign: 'center' }}>Weather Details</h1>

        <div style={{ display: 'flex', marginLeft: '200px', marginTop: '50px' }}>
          <div style={{ marginTop: '30px' }}>
            <form>
              <label>USER INPUT</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={this.handleInputChange}
              />
              <button type="button" onClick={this.fetchWeatherData}>
                Submit
              </button>
            </form>
          </div>

          {weatherData && (
            <div style={{ marginLeft: '50px' }} id="display">
              <h2>CITY NAME IS: {weatherData.location.city}</h2>
              <h2>CITY HUMIDITY IS: {weatherData.current_observation.atmosphere.humidity}</h2>
              <h2>CITY SUNRISE AT: {weatherData.current_observation.astronomy.sunrise}</h2>
              <h2>CITY SUNSET AT: {weatherData.current_observation.astronomy.sunset}</h2>
              <h2>CITY TEMPERATURE IS: {weatherData.current_observation.condition.temperature}</h2>
            </div>
          )}

          {error && (
            <div style={{ marginLeft: '50px', color: 'red' }}>
              <h2>{error}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}
