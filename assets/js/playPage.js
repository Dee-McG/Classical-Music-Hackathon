let currentNotes = [];

// create the playerNotes array
let playerNotes = [];

function handleRedirectToLandingPage() {
  window.location.href = "index.html";
}

function pickNote(note) {
  console.log(note);
}

// map piano keys to their sound files
const keyToSoundMap = {
    'C1': 'assets/music-notes/piano-c_C_major.wav',
    'D': 'assets/music-notes/piano-d_D_major.wav',
    'E': 'assets/music-notes/piano-e_E_major.wav',
    'F': 'assets/music-notes/piano-f_F_major.wav',
    'G': 'assets/music-notes/piano-g_G_major.wav',
    'A': 'assets/music-notes/piano-a_A_major.wav',
    'B': 'assets/music-notes/piano-b_B_major.wav',
    'C2': 'assets/music-notes/piano-c_C_major.wav',
    'C#': 'assets/music-notes/piano-c_C-sharp.wav',
    'D#': 'assets/music-notes/piano-d_D-sharp.wav',
    'F#': 'assets/music-notes/piano-f_F-sharp.wav',
    'G#': 'assets/music-notes/piano-g_G-sharp.wav',
    'A#': 'assets/music-notes/piano-a_A-sharp.wav',
}

// add event listeners to each SVG key to ensure click functionality and push the key to playerNotes array
document.getElementById("note-c1").addEventListener("click", function () {
  playerNotes.push("C");
  playSound(keyToSoundMap["C"]);
  flashKey('note-c1');
});

document.getElementById("note-d").addEventListener("click", function () {
  playerNotes.push("D");
  playSound(keyToSoundMap["D"]);
  flashKey('note-d');
});

document.getElementById("note-e").addEventListener("click", function () {
  playerNotes.push("E");
  playSound(keyToSoundMap["E"]);
  flashKey('note-e');
});

document.getElementById("note-f").addEventListener("click", function () {
  playerNotes.push("F");
  playSound(keyToSoundMap["F"]);
  flashKey('note-f');
});

document.getElementById("note-g").addEventListener("click", function () {
  playerNotes.push("G");
  playSound(keyToSoundMap["G"]);
  flashKey('note-g');
});

document.getElementById("note-a").addEventListener("click", function () {
  playerNotes.push("A");
  playSound(keyToSoundMap["A"]);
  flashKey('note-a');
});

document.getElementById("note-b").addEventListener("click", function () {
  playerNotes.push("B");
  playSound(keyToSoundMap["B"]);
  flashKey('note-b');
});

document.getElementById("note-c2").addEventListener("click", function () {
  playerNotes.push("C");
  playSound(keyToSoundMap["C"]);
  flashKey('note-c2');
});

document.getElementById('note-c-sharp').addEventListener('click', function() {
    playerNotes.push('C-sharp');
    playSound(keyToSoundMap['C#']);
    flashKey('note-c-sharp');
});

document.getElementById('note-d-sharp').addEventListener('click', function() {
    playerNotes.push('D-sharp');
    playSound(keyToSoundMap['D#']);
    flashKey('note-d-sharp');
});

document.getElementById('note-f-sharp').addEventListener('click', function() {
    playerNotes.push('F-sharp');
    playSound(keyToSoundMap['F#']);
    flashKey('note-f-sharp');
});

document.getElementById('note-g-sharp').addEventListener('click', function() {
    playerNotes.push('G-sharp');
    playSound(keyToSoundMap['G#']);
    flashKey('note-g-sharp');
});

document.getElementById('note-a-sharp').addEventListener('click', function() {
    playerNotes.push('A-sharp');
    playSound(keyToSoundMap['A#']);
    flashKey('note-a-sharp');
});
    
// sound playback function
function playSound(audioSrc) {
  const audio = new Audio(audioSrc);
  audio.play();
}

// Function to flash the key when pressed
function flashKey(keyId) {
  const keyElement = document.getElementById(keyId);
  if (keyElement) {
      keyElement.classList.add('flash');  // Add flash class
      setTimeout(() => keyElement.classList.remove('flash'), 200);  // Remove flash after 200ms
  }
}

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

//------- Function to check the answer ------------------
const checkAnswer = () => {
  let results = {
    correctAnswer: "",
    correctNotes: 0,
  };

  let correctNotes = 490;

  if (JSON.stringify(currentNotes) === JSON.stringify(playerNotes)) {
    results["correctAnswer"] = true;
    results["correctNotes"] = playerNotes.length;
    return results;
  }

  for (let i = 0; i < playerNotes.length; i++) {
    if (currentNotes[i] === playerNotes[i]) {
      correctNotes++;
    }
  }

  results["correctAnswer"] = false;
  results["correctNotes"] = correctNotes;
  return results;
};

//------- Game Over ------------------
const testy = `
    <div class="game-over-container">
        <div class="game-over-card">
            <h1>Game Over!</h1>
            <hr/>
            <p>Final Score: <span id="showFinalScore">0</span></p>
            <button class="play-again-button" onclick="handleResetGame()">Play again</button>
        </div>
    </div>
    `;

function handleDisplayGameOver() {
  document.getElementById("gameOverDisplay").innerHTML = testy;
}
function handleResetGame() {
  window.location.href = "play-page.html";
}

// LIFE COUNTER | SCORE COUNTER : Functionality
// Initial lives and score
let lives = 3;
let score = 0;

function handleScoreAndLives() {
  // Get result of answer and store in variable
  const result = checkAnswer();

  // Points to add and decrease basead in the answer.
  const pointMultiplier = 15;
  const pointDeduction = 15;

  if (result.correctAnswer === true) {
    score += pointMultiplier;
    updateDisplay();
  } else {
    score -= pointDeduction;
    lives -= 1;
    if (lives <= 0) {
      handleDisplayGameOver();
    }
    updateDisplay();
  }
}

function updateDisplay() {
  console.log(`Lives remaining: ${lives}`);
  // Update the score display in the UI
  document.getElementById("scoreCounter").textContent = `Score: ${score}`;
  // Update life counter display
  for (let i = 1; i <= 3; i++) {
    const heartLife = document.getElementById(`heart${i}`);
    if (i <= lives) {
      // Change to red heart
      heartLife.classList.remove("grey-heart");
      console.log(`Heart ${i} is red.`);
    } else {
      // Change to grey heart
      heartLife.classList.add("grey-heart");
      console.log(`Heart ${i} is grey.`);
    }
  }
}
