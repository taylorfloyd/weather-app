import { Geolocation } from "../Geolocation/Geolocation";
    /*
    getLatLong calls "Coordinates by zip/post code" from the 
    Open Weather API's Geocoding API

    It returns 

    This is linked here: https://openweathermap.org/api/geocoding-api 

    The path is http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}

    It returns a JSON of the geolocation of the provided zip code & country code,
    as defined in the Geolocation interface in Geolocation/Geolocation.tsx.

    An example of this JSON can be found in services/jsonExamples/geocodingsample.json

    The Open Weather API Key and API URL should be set in the .env file.
    More information can be found in README.md
    */
    export default function getLatLong(geolocation: Geolocation) {

        return fetch(`${process.env.REACT_APP_API_URL}/geo/1.0/zip?zip=${geolocation.zip},${geolocation.country}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.ok ? response.json(): Promise.reject(new Error()))
        .catch((err) => {
          console.log("Error getting geolocation with zip code/country code in service");
          console.log(err);
        });
        
    }