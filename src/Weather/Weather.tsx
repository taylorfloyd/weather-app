

export interface Weather {
        coord : Coord,
        weather: WeatherInformation, 
        base: String, 
        main: MainInformation, 
        visibility: Number, 
        wind: Wind, 
        clouds: Clouds, 
        dt: Number, 
        sys: SysInformation, 
        timezone: Number, 
        id: Number, 
        name: String, 
        cod: Number
}


export interface Coord {
    lon: Number; 
    lat: Number;
}

export interface WeatherInformation {
    id: Number; 
    main: String;
    description: String;
    icon: String;
}

export interface MainInformation {
        temp: Number;
        feels_like: Number;
        temp_min: Number;
        temp_max: Number;
        pressure: Number;
        humidity: Number;
}

export interface Wind {
    speed: Number; 
    deg: Number;
    gust: Number;
}

export interface Clouds {
    all: Number; 
}

export interface SysInformation {
        country: String, 
        id: Number, 
        sunrise: Number, 
        sunset: Number, 
        type: Number
}

export const emptyCoord: Coord =     
{
    lon: 0,
    lat: 0
}

export const emptyWeatherInformation: WeatherInformation =     
{
    id: 0,
    main: "",
    description: "",
    icon: "",
}

export const emptyMain: MainInformation =     
{
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0
}

export const emptyWind: Wind =     
{
    speed: 0,
    deg: 0,
    gust: 0
}

export const emptyClouds: Clouds =     
{
    all: 0, 
}

export const emptySysInformation: SysInformation =     
{
    country: "", 
    id: 0, 
    sunrise: 0, 
    sunset: 0, 
    type: 0
}

export const emptyWeatherObject: Weather =     
{
    coord : emptyCoord,
    weather: emptyWeatherInformation, 
    base: "", 
    main: emptyMain,
    visibility: 0,
    wind: emptyWind, 
    clouds: emptyClouds, 
    dt: 0, 
    sys: emptySysInformation, 
    timezone: 0, 
    id: 0, 
    name: "", 
    cod: 0
}


