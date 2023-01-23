import logo from './icons8-weather.svg';
import './App.css';

function App() {
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

      </header>
      <footer className="App-footer">
      <a 
          className="App-logo-link"
          target="_blank" 
          href="https://icons8.com/icon/qA3w9Yp2vY7r/weather">
          Weather
        </a>
        <p>icon by</p>
        <a
        className="App-logo-link"
        target="_blank"
        href="https://icons8.com">
          Icons8
        </a>
      </footer>
    </div>
  );
}

export default App;
