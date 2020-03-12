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
      <body className="articles">
        <div className="article-section">
          <div className="article-title">Article Title</div>
          <div className="article-date">Posted on March 12, 2020 by Sam Coleman</div>
          <img className="article-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQph8v3McYsk0ixTCBG6WL7SZDCXEue0ePDGLhsdzMM4luqvJbq'} />
          <div className="article-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </body>
    </div>
  );
}

export default App;