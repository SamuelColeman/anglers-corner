import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header">
          <div className="app-title">ANGLERS CORNER</div>
          <div className="app-description">Out-for-Trout</div>
        </div>
        <form className="nav">
          <button id="nav-btn" className="nav-btn" type="button">ABOUT</button>
          <button className="nav-btn" type="button">CONTACT</button>
        </form>
      </header>
    </div>
  );
}

export default App;