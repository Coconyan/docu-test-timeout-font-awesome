import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as svgIcons from '@fortawesome/free-solid-svg-icons';

const gatRandomPropertyFromObj = (obj: any): any => {
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
};

function App() {
  const [icon, setIcon] = useState(gatRandomPropertyFromObj(svgIcons));

  const randomizeHandle = () => {
    setIcon(gatRandomPropertyFromObj(svgIcons));
  }

  return (
    <div className="App">
      <header className="App-header">
        Docu Font Awesome Test
      </header>
      <div className="wrapper">
        <div>
          Random Icon:&nbsp;
          <FontAwesomeIcon icon={icon} />
        </div>
        <button onClick={randomizeHandle}>Click me to randomize icon</button>
      </div>
      <footer className="App-footer">
        Icons are taken from the&nbsp;
        <a className="App-link" href="https://fontawesome.com/">fontawesome</a>
      </footer>
    </div>
  );
}

export default App;
