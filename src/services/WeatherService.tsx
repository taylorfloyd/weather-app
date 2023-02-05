export default function getWeatherWithLatLong(latitude: Number, longitude: Number) {

    return fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.ok ? response.json(): Promise.reject(new Error()))
    .catch((err) => {
      console.log("Error getting weather with lat/long in service");
      console.log(err);
    });
    
}