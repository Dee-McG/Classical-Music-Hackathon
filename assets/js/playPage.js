function handleRedirectToLandingPage() {
  window.location.href = "index.html";
}

function pickNote(note) {
  console.log(note);
}

// use computer keyboard as piano keyboard
document.addEventListener("keydown", function (event) {
  // flat
  if (event.key === "s") {
    pickNote("C");
    addNote("C");
  }
  if (event.key === "d") {
    pickNote("D");
    addNote("D");
  }
  if (event.key === "f") {
    pickNote("E");
    addNote("E");
  }
  if (event.key === "g") {
    pickNote("F");
    addNote("F");
  }
  if (event.key === "h") {
    pickNote("G");
    addNote("G");
  }
  if (event.key === "j") {
    pickNote("A");
    addNote("A");
  }
  if (event.key === "k") {
    pickNote("B");
    addNote("B");
  }
  if (event.key === "l") {
    pickNote("C");
    addNote("C");
  }

  // sharp
  if (event.key === "e") {
    pickNote("C#");
    addNote("C#");
  }
  if (event.key === "r") {
    pickNote("D#");
    addNote("D#");
  }
  if (event.key === "y") {
    pickNote("F#");
    addNote("F#");
  }
  if (event.key === "u") {
    pickNote("G#");
    addNote("G#");
  }
  if (event.key === "i") {
    pickNote("A#");
    addNote("A#");
  }

  // erase
  if (event.key === "Backspace") {
    eraseNote();
  }
});

const computerNotearray = ["C", "D", "E", "F", "G"]; // placecholder array, this will be changed later by whoever code the generate notes system
computerNotearray.forEach((note, index) => {
  // placeholder function to render the array, this will also be changed later
  const paragraph = document.getElementById(`computerNote${index + 1}`);
  if (paragraph) {
    paragraph.textContent = note;
  }
});

const noteArray = [];
function renderSelectedNote(index) {
  return noteArray[index] !== undefined ? noteArray[index] : "";
}
function updateNotes() {
  for (let i = 0; i < 5; i++) {
    document.getElementById("note" + (i + 1)).innerHTML = renderSelectedNote(i);
  }
}
function addNote(note) {
  if (noteArray.length < 5) {
    noteArray.push(note); // Adds the new car to the array
    updateNotes();
  }
}
function eraseNote() {
  noteArray.pop();
  updateNotes();
}

