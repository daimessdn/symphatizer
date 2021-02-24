import React from "react";
import * as Tone from "tone";

import notes from "./notes";
import "./notes.css";

function Keyboards({ key, tuts, left }) {
  let instrument = new Tone.Synth().toDestination();

  return (
    <div className="keyboard">
      {notes.map((note, index) => {
        return (
          <div 
             key={index}
             className={`${note.tuts}-note`}
             style={{ left: note.left }}
             onClick={() => {instrument.triggerAttackRelease(note.key, "8n")}}>
          </div>
        )
      })}
    </div>
  )
}

export default Keyboards;