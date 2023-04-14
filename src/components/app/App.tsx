import React from 'react';
import './App.css';
import RandomizeEachClick from '../randomize-each-click/randomize-each-click';
import * as svgIcons from '@fortawesome/free-solid-svg-icons';
import RandomizeLastClick from '../randomize-last-click/randomize-last-click';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        DocuSketch Font Awesome Test
      </header>
      <div className="Randomize-wrapper">
        <RandomizeEachClick svgIcons={svgIcons} />
        <RandomizeLastClick svgIcons={svgIcons} />
      </div>
      <footer className="App-footer">
        Icons are taken from the&nbsp;
        <a className="App-link" href="https://fontawesome.com/">fontawesome</a>
      </footer>
    </div>
  );
}

export default App;
