import { Geolocation } from "../Geolocation/Geolocation";    /*
    getWeatherWithLatLong calls "Current Weather Data" from  Open Weather API 

    This is linked here: https://openweathermap.org/current 

    The path is https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    It returns a JSON of the current weather. This is defined in the 
    Weather interface in Weather/Weather.tsx.

    An example of this JSON can be found in services/jsonExamples/weatherapisample.json

    The Open Weather API Key and API URL should be set in the .env file.
    More information can be found in README.md
    */
export default function getWeatherWithLatLong(geolocation: Geolocation) {

    return fetch(`${process.env.REACT_APP_API_URL}/data/2.5/weather?lat=${geolocation.lat}&lon=${geolocation.lon}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.ok ? response.json(): Promise.reject(new Error()))
    .catch((err) => {
      console.log("Error getting weather with lat/long in service");
      console.log(err);
    });
    
}