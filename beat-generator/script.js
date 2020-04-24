//

const inspirations = [
  "Copy a song?",
  "Sample an LP",
  "Sample from digital library",
  "Dig for an internet sample",
  "Compose a melody",
  "Compose a drum track",
  "Dick around on guitar",
  "Compose a bassline"
];

const typesOfSamples = [
  "funk",
  "soul",
  "jazz",
  "soundtrack",
  "prog",
  "latin",
  "rock"
];

const typesOfDrums = [
  "trap",
  "slapper",
  "boom bap",
  "funk/break",
  "tech/progressive/idm",
  "wonky/snaps/flylo"
];

const typesOfMelodies = [
  "videogame/chip",
  "sad",
  "spooky",
  "triumphant",
  "jazzy",
  "progressive",
  "happy"
];

const lpLocations = [
  "top-left-1",
  "top-left-2",
  "top-left-3",
  "top-left-4",
  "bottom-left-1",
  "bottom-left-2",
  "bottom-left-3",
  "bottom-left-4",
  "bottom-middle-1",
  "bottom-middle-2",
  "bottom-middle-3",
  "bottom-middle-4",
  "bottom-right-1",
  "bottom-right-2",
  "bottom-right-3",
  "bottom-right-4",
  "top-right-1",
  "top-right-2",
  "top-right-3",
  "top-right-4"
];

const keys = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Fb",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab"
];

const modes = [
  "Major",
  "Minor",
  "Lydian",
  "Mixolydian",
  "Spanish",
  "Dorian",
  "Phrygian",
  "Harmonic Minor",
  "Melodic Minor",
  "Major Pentatonic",
  "Minor Pentatonic",
  "Hemi Pentatonic"
];

function getInspiration() {
  return inspirations[Math.floor(Math.random() * inspirations.length)];
}

function setInspiration() {
  document.getElementById("root").innerHTML = getInspiration();
}

function getTypeOfSample() {
  return typesOfSamples[Math.floor(Math.random() * typesOfSamples.length)];
}

function setTypeOfSample() {
  document.getElementById("sample").innerHTML = getTypeOfSample();
}

function getTypeOfDrums() {
  return typesOfDrums[Math.floor(Math.random() * typesOfDrums.length)];
}

function setTypeOfDrums() {
  document.getElementById("drums").innerHTML = getTypeOfDrums();
}

function getTypeOfMelody() {
  return typesOfMelodies[Math.floor(Math.random() * typesOfMelodies.length)];
}

function setTypeOfMelody() {
  document.getElementById("melody").innerHTML = getTypeOfMelody();
}

function getLPlocation() {
  return lpLocations[Math.floor(Math.random() * lpLocations.length)];
}

function setLPlocation() {
  document.getElementById("LP").innerHTML = getLPlocation();
}

function getKey() {
  return (
    keys[Math.floor(Math.random() * keys.length)] +
    " " +
    modes[Math.floor(Math.random() * modes.length)]
  );
}

function setKey() {
  document.getElementById("key").innerHTML = getKey();
}
