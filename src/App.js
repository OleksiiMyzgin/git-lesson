import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello, my name is Alex</h1>
      <h2>I am a frontend developer</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>This is a git lesson</h2>
      </header>
      <footer>
      Copyright 2019 Alexey Myzgin
      </footer>
    </div>
  );
}

export default App;
