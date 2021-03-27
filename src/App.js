import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     

      <h1>Hello ReactJS!</h1>
      <p>This is so easy to create the HtML5 pages :)</p>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
