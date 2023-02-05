import logo from './icons8-weather.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import getWeatherWithLatLong from './services/WeatherService';
import { Weather, emptyWeatherObject } from './Weather/Weather';

function App() {

  const [latitude, setLatitude] = useState(35.9053);
  const [longitude, setLongitude] = useState(-81.5347);
  const [weatherjson, setWeatherjson] = useState<Weather>(emptyWeatherObject);
  const [errorState, setErrorState] = useState(false);


  useEffect(() => {

    getWeatherWithLatLong(latitude, longitude)
      .then(response => {
        if(response) {
          setWeatherjson(response);
          console.log('response in useeffect', response);
        } else {
          console.log('error', response);
          setErrorState(true);
        }
      });

  }, [latitude, longitude]);

  // let weatherJSON = getWeatherWithLatLong(latitude, longitude);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Weather Application
        </p>
        <a
          className="App-link"
          href="https://weather.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See Current Weather
        </a>
        {errorState ? 
        <p>
          There was an error getting the current weather. Please try again.
        </p>
        : 
        <div>
          <p>
          {latitude} Lat, {longitude} Long
          </p>
          <p>
          Location: {weatherjson.name}, {weatherjson.sys.country}
          </p>
          <p>
          Current Temp: {weatherjson.main.temp.toString()}
          </p>
        </div>
        }
      </header>
      <footer className="App-footer">
      <a 
          className="App-logo-link"
          target="_blank" 
          rel="noreferrer"
          href="https://icons8.com/icon/qA3w9Yp2vY7r/weather">
          Weather
        </a>
        <p>icon by</p>
        <a
        className="App-logo-link"
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com">
          Icons8
        </a>
      </footer>
    </div>
  );
}

export default App;
