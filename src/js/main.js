// init'd keyboard instrument
let currentInstrument = "synth";
let synth = new Tone.Synth().toDestination();

// init'd keyboard notes
const notes = [
    {key: "C4", tuts: "white", left: "0px"},
    {key: "C#4", tuts: "black", left: "30px"},
    {key: "D4", tuts: "white", left: "40px"},
    {key: "D#4", tuts: "black", left: "70px"},
    {key: "E4", tuts: "white", left: "80px"},
    {key: "F4", tuts: "white", left: "120px"},
    {key: "F#4", tuts: "black", left: "150px"},
    {key: "G4", tuts: "white", left: "160px"},
    {key: "G#4", tuts: "black", left: "190px"},
    {key: "A4", tuts: "white", left: "200px"},
    {key: "A#4", tuts: "black", left: "230px"},
    {key: "B4", tuts: "white", left: "240px"},
    {key: "C5", tuts: "white", left: "280px"},
    {key: "C#5", tuts: "black", left: "310px"},
    {key: "D5", tuts: "white", left: "320px"},
    {key: "D#5", tuts: "black", left: "350px"},
    {key: "E5", tuts: "white", left: "360px"},
    {key: "F5", tuts: "white", left: "400px"},
    {key: "F#5", tuts: "black", left: "430px"},
    {key: "G5", tuts: "white", left: "440px"},
    {key: "G#5", tuts: "black", left: "470px"},
    {key: "A5", tuts: "white", left: "480px"},
    {key: "A#5", tuts: "black", left: "510px"},
    {key: "B5", tuts: "white", left: "520px"},
    {key: "C6", tuts: "white", left: "560px"},
];

const keyboard = document.querySelector(".keyboard");

const instrumentOptions = document.querySelector("#instrument-select");

// change instrument function
const changeInstrument = (currentInstrument) => {
    switch (currentInstrument) {
        case "synth":
            return new Tone.Synth().toDestination();

        case "amsynth":
            return new Tone.AMSynth().toDestination();

        case "duosynth":
            return new Tone.DuoSynth().toDestination();

        case "fmsynth":
            return new Tone.FMSynth().toDestination();

        case "membranesynth":
            return new Tone.MembraneSynth().toDestination();

        case "metalsynth":
            return new Tone.MetalSynth().toDestination();

        case "monosynth":
            return new Tone.MonoSynth().toDestination();

        case "plucksynth":
            return new Tone.PluckSynth().toDestination();
    }
};

// load keyboard notes
document.addEventListener("DOMContentLoaded", (event) => {
	notes.forEach(note => {
		keyboard.innerHTML += `<div class="${note.tuts}-note"
		                           onmousedown="synth.triggerAttackRelease('${note.key}', '8n')"
		                           style="left: ${note.left};">
		                       </div>`;
	});
});

// change synth instrument
//// based on instrument option changed
instrumentOptions.addEventListener("change", (event) => {
    currentInstrument = event.target.value;

    synth = changeInstrument(currentInstrument);
});