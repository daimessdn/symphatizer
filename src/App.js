import React from "react";
import * as Tone from "tone";

import './App.css';
import './keynote.css';

function App() {
  const notes = [
    {key: "C4", tuts: "white", left: "0px"},
    {key: "C#4", tuts: "black", left: "45px"},
    {key: "D4", tuts: "white", left: "60px"},
    {key: "D#4", tuts: "black", left: "105px"},
    {key: "E4", tuts: "white", left: "120px"},
    {key: "F4", tuts: "white", left: "180px"},
    {key: "F#4", tuts: "black", left: "225px"},
    {key: "G4", tuts: "white", left: "240px"},
    {key: "G#4", tuts: "black", left: "285px"},
    {key: "A4", tuts: "white", left: "300px"},
    {key: "A#4", tuts: "black", left: "345px"},
    {key: "B4", tuts: "white", left: "360px"},
    {key: "C5", tuts: "white", left: "420px"},
  ];

  const synth = new Tone.Synth().toDestination();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, world!</h1>
        
        <div className="keyboard">
          {notes.map((note, index) => {
            return (
              <div 
                   key={index}
                   className={note.tuts + "-note"}
                   style={{ left: note.left }}
                   onClick={() => {synth.triggerAttackRelease(note.key, "8n")}}>
                
              </div>
            )
          })}
        </div>

      </header>
    </div>
  );
}

export default App;
