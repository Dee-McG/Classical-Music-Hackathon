// Define your currentNotes and playerNotes as before
let currentNotes = [];
let playerNotes = [];

// Fetch the questions based on difficulty (JSON object)
async function getQuestionsByDifficulty(difficulty) {
  // Define your question sets here (or fetch from a server/API if needed)
  const questions = {
    "easy": [
      // Add your easy questions here as objects (from the JSON you've provided)
    ],
    "medium": [
      // Add your medium questions here as objects
    ],
    "hard": [
      // Add your hard questions here as objects
    ]
  };
  
  // Return the question set based on difficulty
  return questions[difficulty];
}

// Function to start the game based on selected difficulty
async function startGame(difficulty) {
  const questions = await getQuestionsByDifficulty(difficulty);
  
  if (questions && questions.length > 0) {
    // Select a random question from the chosen difficulty
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomQuestionIndex];

    console.log('Selected question:', selectedQuestion);

    // Set the current notes from the selected question
    currentNotes = selectedQuestion.notes;

    // Start playing the song clip if needed
    const songClip = selectedQuestion.clip;
    playSongClip(songClip);

    // Display question details to the player
    updateGamePrompt(`Now playing: ${selectedQuestion.songTitle} by ${selectedQuestion.artist}`);
  }
}

// Function to play the song clip (YouTube video or audio)
function playSongClip(clipUrl) {
  const iframe = document.getElementById('songClip'); // Assuming you have an iframe with this id
  iframe.src = clipUrl;
}

// Example game prompt update function
function updateGamePrompt(message) {
  const promptDiv = document.getElementById("gamePrompt"); // Assuming you have a div with this id
  if (promptDiv) {
    promptDiv.textContent = message;
  }
}

// Existing play button functionality
document.getElementById('playButton').addEventListener('click', function() {
  // You can choose the difficulty dynamically, or use a default for now
  const difficulty = 'easy'; // Change this to 'medium' or 'hard' if needed

  // Start the game with the selected difficulty
  startGame(difficulty);
});

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

// Function to update game prompt
function updateGamePrompt(message) {
  const promptDiv = document.getElementById("gamePrompt");
  if (promptDiv) {
    promptDiv.textContent = message;
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

async function loadMusicData() {
    // Asynchronously loads music data from the 'music.json' file
    try {
        const response = await fetch('assets/js/json/music.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const musicData = await response.json();
        return musicData;
    } catch (error) {
        console.error('Error loading music data:', error);
    }
}


// Function to play the current song notes one by one
function playSongNotes() {
  let delay = 1000; // delay between notes in milliseconds (1 second)
  
  currentNotes.forEach((note, index) => {
    setTimeout(() => {
      playSound(keyToSoundMap[note]); // play the sound for the note
      flashKey(`note-${note.toLowerCase().replace('#', '-sharp')}`); // flash the key
    }, delay * index); // apply the delay for each note
  });
}

// Function call when you want to play the song
function startSongPlayback() {
  if (currentNotes.length > 0) {
    playSongNotes();
  } else {
    console.error("No song notes found to play.");
  }
}
// Use startSongPlayback() whenever you want to play the current song notes

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

let errorCount = 0; // Contador para rastrear os erros

function handleScoreAndLives() {
  // Get result of answer and store in variable
  const result = checkAnswer();

  // Points to add and decrease based on the answer & in-game prompts
  const pointMultiplier = 15;
  const pointDeduction = 5;

  if (result.correctAnswer === true) {
    score += pointMultiplier;
    errorCount = 0;
  } else {
    score -= pointDeduction;
    errorCount += 1;

    // Perde uma vida a cada 2 erros
    if (errorCount % 2 === 0) {
      lives -= 1;
    updateGamePrompt("Great job! You got it right!"); 
    updateDisplay();
  } else {
    score -= pointDeduction;
    lives -= 1;
    updateGamePrompt("Oops! Try again.");
    if (lives === 1) {
      updateGamePrompt("Careful! You have 1 life left.");
  }
    if (lives <= 0) {
      handleDisplayGameOver();
    }
  }
  if (lives <= 0) {
    handleDisplayGameOver();
  } else {
    updateDisplay();
  }
}

function updateDisplay() {
  // Update the score display in the UI
  document.getElementById("scoreCounter").textContent = `Score: ${score}`;
  // Update life counter display
  for (let i = 1; i <= 3; i++) {
    const heartLife = document.getElementById(`heart${i}`);
    if (i <= lives) {
      // Change to red heart
      heartLife.classList.remove("grey-heart");
    } else {
      // Change to grey heart
      heartLife.classList.add("grey-heart");
    }
  }
}

// Lifeline logic
let lifelinesAvailable = [true, true, true];  // To track if lifelines are used

function useLifeline(lifelineNumber) {
    if (!lifelinesAvailable[lifelineNumber - 1]) {
        updateGamePrompt(`Lifeline ${lifelineNumber} already used!`);
        return;
    }

    switch (lifelineNumber) {
        case 1:
            // Add an extra life
            if (lives < 3) {
                lives++;
                updateGamePrompt("Lifeline 1 used: Extra life granted!");
            } else {
                updateGamePrompt("You already have full lives!");
            }
            break;
        case 2:
            // Show a hint or correct note
            showHint();
            updateGamePrompt("Lifeline 2 used: Hint revealed!");
            break;
        case 3:
            // Skip current round
            skipRound();
            updateGamePrompt("Lifeline 3 used: Round skipped!");
            break;
        default:
            updateGamePrompt("Unknown lifeline used!");
    }

    lifelinesAvailable[lifelineNumber - 1] = false;  // Mark lifeline as used
    disableLifelineButton(lifelineNumber);  // Disable the button
    updateDisplay();
}

// Disable lifeline button after use
function disableLifelineButton(lifelineNumber) {
    const lifelineButton = document.getElementById(`lifeline${lifelineNumber}`);
    if (lifelineButton) {
        lifelineButton.disabled = true;
    }
}

// Functions for lifeline actions
function showHint() {
    // Logic to display a hint to the player
    console.log("Hint: Displaying one of the correct notes.");
}

function skipRound() {
    // Logic to skip the current round
    console.log("Skipping this round."); }
}