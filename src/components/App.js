import React from 'react';
import logo from '../assets/logo.svg';
import {DatePicker} from 'antd';
import '../css/App.css';
import ControlPanel from "./redux/ControlPanel";

function App() {
  return (
    <div className="App">
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
        <DatePicker/>
        <ControlPanel/>
      </header>

    </div>
  );
}

export default App;
