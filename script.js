// Constants
const notes = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];
const MAX_PREVIOUS_NOTES = 6;

// Functions
function getRandomInt(min = 0, max = 13) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const generatedNotes = [];
function generateNotes() {
  const field = document.getElementById('notes');
  const index = getRandomInt();
  generatedNotes.unshift(notes[index]);
  if (generatedNotes.length > MAX_PREVIOUS_NOTES) {
    generatedNotes.pop();
  }
  field.innerHTML = generatedNotes.join('<br>');
  console.log(generatedNotes)
}

// Events
let findSelected = () => {
  um = document.querySelector("input[name='UM']:checked").value
  intervalo.placeholder = um === 'BPM' ? 'Velocidade [BPM]' : um === 's' ? 'Intervalo [s]' : 'Velocidade [BPS]';
} 

const radioBtns = document.querySelectorAll('input[name="UM"]');
radioBtns.forEach(radioBtn => {
  radioBtn.addEventListener("change", findSelected)
});

const button = document.getElementById('start-stop-button');
button.addEventListener('click', toggleInterval);

let um = document.querySelector("input[name='UM']:checked").value;
const intervalo = document.getElementById('intervalo')
let isIntervalRunning = false;
let myInterval;

function toggleInterval() {
  if (isIntervalRunning) {
    clearInterval(myInterval);
    isIntervalRunning = false;
    button.innerText = 'Start'
  } else {
    if(um === 'BPM'){
      myInterval = setInterval(generateNotes, 60 * 1000/(intervalo.value));
    }else if (um === 's'){
      myInterval = setInterval(generateNotes, intervalo.value*1000);
    }else if (um === 'BPS'){
      myInterval = setInterval(generateNotes, 1000/intervalo.value);
    }
    isIntervalRunning = true;
    button.innerText = 'Stop'
  }
}

//Hooks
let showFrets = false;
const toggleFrets = document.querySelector('#toggleFrets');
toggleFrets.addEventListener('change', function() {
  showFrets = this.checked;
  console.log('Show Frets: ' + showFrets);
});

let showChords = false;
const toggleChords = document.querySelector('#toggleChords');
toggleChords.addEventListener('change', function() {
  showChords = this.checked;
  console.log('Show Chords: ' + showChords);
});