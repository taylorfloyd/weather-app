# NOTE: APPLICATION IS IN DEVELOPMENT

# Weather Application

This project is a weather application for viewing daily weather in the user's current location. This project is still in development.

# Specifications

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## React Bootstrap Components

This project leverages third-party components from [React Bootstrap](https://react-bootstrap.netlify.app/). 

## Third Party API: OpenWeather

This application uses the [Open Weather API](https://openweathermap.org/) for fetching weather data. 

### .env file

Any user of this application is expected to sign up as a user with [Open Weather](https://openweathermap.org/). 

Once you receive your OpenWeather API Key, add the following to your .env file in the root directory:
```
REACT_APP_API_URL = 'https://api.openweathermap.org'
REACT_APP_API_KEY = [API KEY]
```

# Getting Started

## Clone repository

Clone weather-app with `git clone https://github.com/taylorfloyd/weather-app.git`

## Run the application locally

This application uses npm (Node Package Manager). 

`npm install` installs all necessary node packages, as stated in package.json.

`npm start` runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Run tests locally

This application has various tests that leverage the react testing library.\
All tests are located in the same directory as their corresponding component with the suffix `<component name>.test.tsx`.

`npm test` launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.