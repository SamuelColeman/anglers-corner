import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="app-title">ANGLERS CORNER</div>
        <div className="app-description">Out-for-Trout</div>
      </header>
      <form className="nav">
        <button className="nav-btn" type="button">About</button>
        <button className="nav-btn" type="button">Contact</button>
      </form>
    </div>
  );
}

export default App;