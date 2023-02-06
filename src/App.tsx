import logo from './icons8-weather.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import getWeatherWithLatLong from './services/WeatherService';
import { Weather, Coord, emptyWeatherObject } from './Weather/Weather';
import LocationForm from './LocationForm/LocationForm';
import {Geolocation} from './Geolocation/Geolocation';
import getLatLong from './services/GeocodingService';
  /*
  App is the root of the Weather App Web Application.
  It renders the LocationForm component, as well as its own
  header and footer blocks.

  All styling for this page is is App.css
  */
function App() {

  // Coordinates of weather location
  // const [coordinates, setCoordinates] = useState<Coord>({lat: 35.9053, lon: -81.5347});
  const [coordinates, setCoordinates] = useState<Coord>({lat: 35.9053, lon: -81.5347});

  // Full JSON returned from getWeatherWithLatLong
  const [weatherjson, setWeatherjson] = useState<Weather>(emptyWeatherObject);

  // Indicates there was an API Call error
  const [errorState, setErrorState] = useState(false);

  // Initial state of application before entering location information
  const [initialState, setInitialState] = useState(true);

  // Initial state of application before entering location information
  const [geolocation, setGeoLocation] = useState<Geolocation>();

  // Initial state of application before entering location information
  const [userInput, setUserInput] = useState<Geolocation>();


  /*
  This useEffect calls getLatLong to get the geolocation data
  from the zip code and country code inputted by the user

  It renders upon submission of the form via the onFormSubmit function.
  */
  useEffect(() => {
    if(userInput && userInput.zip && userInput.country) {
      getLatLong(userInput)
      .then(response => {
        if(response) {
          setGeoLocation(response);
          console.log('response in useeffect', response);
        } else {
          console.log('error', response);
          setErrorState(true);
        }
      });
    }
  }, [userInput]);


  /*
  This useEffect calls getWeatherWithLatLong to get the current weather
  at the inputted location by the user.

  It renders after geolocation has been confirmed.
  */
  useEffect(() => {
    if (geolocation && geolocation.lat && geolocation.lon) {
    getWeatherWithLatLong(geolocation)
      .then(response => {
        if(response) {
          setWeatherjson(response);
          console.log('response in useeffect', response);
          setInitialState(false);
        } else {
          console.log('error', response);
          setErrorState(true);
        }
      });
    }
  }, [geolocation]);

/*
This function is called from inside the LocationForm component upon 
form submission. It is passed as a property into this component. 

Arguments: zipCode (string) and countryCode (string)
*/
 const onFormSubmit = (zipCode: string, countryCode: string) => {
  console.log('IN APP:', zipCode, countryCode);

  //this triggers the useEffect that calls getLatLong
  setUserInput({zip: zipCode, country: countryCode})
 }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Weather Application
        </p>
        <LocationForm onFormSubmit={onFormSubmit} />
        {errorState ? 
        <p>
          There was an error getting the current weather. Please try again.
        </p>
        : 
        (initialState ? 
          <p>
            Enter location information to view current weather conditions.
          </p>
          :
        <div>
          <p>
          {coordinates.lat.toString()} Lat, {coordinates.lon.toString()} Long
          </p>
          <p>
          Location: {weatherjson.name}, {weatherjson.sys.country}
          </p>
          <p>
          Current Temp: {weatherjson.main.temp.toString()}
          </p>
        </div>
        )}
      </header>
      <footer className="App-footer">
      <a 
          className="App-logo-link"
          target="_blank" 
          rel="noreferrer"
          href="https://icons8.com/icon/qA3w9Yp2vY7r/weather">
          Weather
        </a>
        <p className="App-logo-link-text">icon by</p>
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
