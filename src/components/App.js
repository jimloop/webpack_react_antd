import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import ControlPanel from "./react_redux/ControlPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlPanel/>
      </header>

    </div>
  );
}

export default App;
