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
    this.setState({ error: '' }); // Reset any previous error
    try {
      const response = await fetch(
        `https://yahoo-weather5.p.rapidapi.com/weather?location=${this.state.city}&format=json&u=c`,
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#1e1e1e' }}>
        <div style={{ width: '300px', background: 'linear-gradient(135deg, #4facfe, #00f2fe)', borderRadius: '20px', padding: '20px', color: 'white', textAlign: 'center', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }}>
          <input
            type="text"
            value={city}
            onChange={this.handleInputChange}
            placeholder="Enter city"
            style={{ width: '80%', padding: '10px', borderRadius: '20px', border: 'none', marginBottom: '10px', textAlign: 'center' }}
          />
          <button onClick={this.fetchWeatherData} style={{ padding: '10px 20px', borderRadius: '20px', border: 'none', background: '#ffffff', color: '#00aaff', fontWeight: 'bold', cursor: 'pointer' }}>Search</button>
          {weatherData && (
            <div>
              <h2 style={{ marginTop: '20px', fontSize: '24px' }}>{weatherData.location.city}</h2>
              <p style={{ fontSize: '20px' }}>{weatherData.current_observation.condition.temperature}°C</p>
              <p>{weatherData.current_observation.condition.text}</p>
              <p>Humidity: {weatherData.current_observation.atmosphere.humidity}%</p>
              <p>Wind: {weatherData.current_observation.wind.speed} km/h</p>
            </div>
          )}
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
      </div>
    );
  }
}
