import logo from './icons8-weather.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import getWeatherWithLatLong from './Services/WeatherService';
import { Weather, emptyWeatherObject } from './Components/Weather/Weather';
import LocationForm from './Components/LocationForm/LocationForm';
import {Geolocation} from './Components/Geolocation/Geolocation';
import getLatLong from './Services/GeocodingService';
import ModalLocationError from './Components/ModalLocationError/ModalLocationError';
import ModalWeatherError from './Components/ModalWeatherError/ModalWeatherError';
  /*
  App is the root of the Weather App Web Application.
  It renders the LocationForm component, as well as its own
  header and footer blocks.

  All styling for this page is is App.css
  */
function App() {

  // Full JSON returned from getWeatherWithLatLong
  const [weatherjson, setWeatherjson] = useState<Weather>(emptyWeatherObject);

  // Indicates there was an API Call error with getting the location
  const [locationErrorState, setLocationErrorState] = useState(false);

    // Indicates there was an API Call error with getting the weather
    const [weatherErrorState, setWeatherErrorState] = useState(false);

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
        } else {
          setLocationErrorState(true);
          setInitialState(true);
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
          setInitialState(false);
        } else {
          setWeatherErrorState(true);
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
  //this triggers the useEffect that calls getLatLong
  setUserInput({zip: zipCode, country: countryCode})
 }

 /*
  This function handles closing the modal for
  location API errors.
 */
 const handleCloseModalLocationError = () => {
    setLocationErrorState(false);
 }

  /*
  This function handles closing the modal for
  weather API errors.
 */
  const handleCloseModalWeatherError = () => {
    setWeatherErrorState(false);
 }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Weather Application
        </p>
        <LocationForm onFormSubmit={onFormSubmit} />
          {initialState ? 
          <p>
            Enter location information to view current weather conditions.
          </p>
          :
        <div className="App-weather-display">
          <p className="App-weather-display-text">
          Location: {weatherjson.name}, {weatherjson.sys.country}
          </p>
          <p className="App-weather-display-text">
          Current Temp: {weatherjson.main.temp.toString()} °F
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
        <p className="App-logo-link-text">icon by</p>
        <a
        className="App-logo-link"
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com">
          Icons8
        </a>
      </footer>
      <ModalLocationError triggerShow={locationErrorState} handleClose={handleCloseModalLocationError}/>
      <ModalWeatherError triggerShow={weatherErrorState} handleClose={handleCloseModalWeatherError}/>
    </div>
  );
}

export default App;
