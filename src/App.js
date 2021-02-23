import React from "react";
import * as Tone from "tone";

import './App.css';

function App() {
  const synth = new Tone.Synth().toDestination();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, world!</h1>
        <button onClick={() => {synth.triggerAttackRelease("C4", "8n")}}>Click me</button>
      </header>
    </div>
  );
}

export default App;
