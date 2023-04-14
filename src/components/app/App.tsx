import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Docu Font Awesome Test
      </header>
      <div className="wrapper">
        <div>
          Random Icon:&nbsp;
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <button>Click me to randomize icon</button>
      </div>
      <footer className="App-footer">
        Icons are taken from the&nbsp;
        <a className="App-link" href="https://fontawesome.com/">fontawesome</a>
      </footer>
    </div>
  );
}

export default App;
