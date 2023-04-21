const notes = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
const MAX_PREVIOUS_NOTES = 6;
const generatedNotes = [];

let isIntervalRunning = false;
let myInterval;

const button = document.getElementById('start-stop-button');
button.addEventListener('click', toggleInterval);

function toggleInterval() {
  if (isIntervalRunning) {
    clearInterval(myInterval);
    isIntervalRunning = false;
    button.innerText = 'Start'
  } else {
    myInterval = setInterval(generateNotes, 500);
    isIntervalRunning = true;
    button.innerText = 'Stop'
  }
}

function generateNotes() {
  const field = document.getElementById('notes');
  const index = getRandomInt();
  generatedNotes.unshift(notes[index]);
  if (generatedNotes.length > MAX_PREVIOUS_NOTES) {
    generatedNotes.pop();
  }
  field.innerHTML = generatedNotes.join('<br>');
}

function getRandomInt(min = 0, max = 13) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}