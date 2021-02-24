import React from "react";

import Keyboards from "./components/keyboards/Keyboards";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's play!</h1>
        
        <Keyboards />
      </header>
    </div>
  );
}

export default App;
