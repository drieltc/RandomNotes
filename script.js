const notes = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
const intervalo = document.getElementById('intervalo')
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
    myInterval = setInterval(generateNotes, intervalo.value*1000);
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

const toggleSwitch1 = document.querySelector('#toggle1');
toggleSwitch1.addEventListener('change', function() {
  if (this.checked) {
    // Perform actions when the first toggle is switched on
    console.log('Toggle 1 is switched on');
  } else {
    // Perform actions when the first toggle is switched off
    console.log('Toggle 1 is switched off');
  }
});

const toggleSwitch2 = document.querySelector('#toggle2');
toggleSwitch2.addEventListener('change', function() {
  if (this.checked) {
    // Perform actions when the second toggle is switched on
    console.log('Toggle 2 is switched on');
  } else {
    // Perform actions when the second toggle is switched off
    console.log('Toggle 2 is switched off');
  }
});
