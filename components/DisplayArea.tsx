import React, { useState } from 'react';
import styles from './DisplayArea.module.css';
import { useSettings } from './SettingsContext';
//icons
import PlusIcon from '../public/PlusIcon.svg'
import MinusIcon from '../public/MinusIcon.svg'
import PlayIcon from '../public/PlayIcon.svg'
import PauseIcon from '../public/PauseIcon.svg'


function StartStopButton(bpm){
  const { selectedOptions } = useSettings();

  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleButtonClick = ({playMode, displayMode, whatToDisplay, instrumentSettings, bpm}) => {
    if (isTimerRunning) {
      console.log('something');
      setIsTimerRunning(false)
    } else {
      console.log('something else');
      setIsTimerRunning(true)
    }
    console.log(playMode, displayMode, whatToDisplay, instrumentSettings, bpm)
  }

  return(
    <button
      id={styles.start_stop_button}
      onClick={() => handleButtonClick({
        playMode: selectedOptions.playMode,
        displayMode: selectedOptions.displayMode,
        whatToDisplay: selectedOptions.whatToDisplay,
        instrumentSettings: selectedOptions.instrumentSettings,
        bpm: bpm,
      })}
    >
      {isTimerRunning ? <PauseIcon /> : <PlayIcon />}
    </button>
    )
}

function FreqControl({ 
  bpmValue,
  setBPMValue
}: {
    bpmValue: number,
    setBPMValue: React.Dispatch<React.SetStateAction<number>>
}) {
  
  const handleSliderChange = (event) => {
    const newBPMValue = parseInt(event.target.value);
    setBPMValue(newBPMValue);
  };

  const handleMouseRest = () => {
    console.log('Explicação BPM')
  }

  const handleButtonClick = (sign:string, value:number) => {
    if (bpmValue <= 249 && bpmValue >=2){
      setBPMValue(sign === '+' ? bpmValue + value : bpmValue - value);
    }
  };

  function GoToBpmButton({ value }: { value: number }) {
    return (
      <button onClick={() => setBPMValue(value)} className={styles.goToBpmButton}>
        {value}<span>bpm</span>
      </button>
    );
  }
  
  return (
    <div id={styles.controllerBPM}>
      <div id={styles.bpm_and_button}>

          <StartStopButton bpm = {bpmValue}/>

          <div id={styles.goToBpmButtons}>
            <GoToBpmButton value = {30}/>
            <GoToBpmButton value = {60}/>
            <GoToBpmButton value = {90}/>
            <GoToBpmButton value = {120}/>

          </div>

          <div id={styles.bpmContainer}>

            <div id={styles.bpmValue}
              onMouseOver={handleMouseRest}
              //Continuar trabalhos aqui!!! A ideia é: se o mouse AINDA estiver por cima da div, criar renderizar um elemento falando um pouco sobre a unidade de medida usada (bpm)
              >
              {bpmValue}
            </div>

          <div id={styles.bpm_text}>bpm</div>

        </div>
      </div>

        <div id={styles.sliderRow}>

          <button className={styles.bpmButtons} onClick={() => handleButtonClick('-', 1)}>
            <MinusIcon />
          </button>

          <input
            type="range"
            name=""
            id={styles.customSliderInput}
            value={bpmValue}
            onChange={handleSliderChange}
            min={1}
            max={250}
          />

          <button className={styles.bpmButtons} onClick={() => handleButtonClick('+', 1)}>
            <PlusIcon />
          </button>

        </div>
    </div>
  );
}

function DisplayNotes({bpmValue}){
  const { selectedOptions } = useSettings();
  
  return (
    <div className={styles.displayAreaContainer}>
        <div id={styles.notesContainer}>
          <div id={styles.notes}>
            <div>
              <h3>Selected Options:</h3>
              <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
                <pre>{JSON.stringify({bpm : bpmValue} , null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
  )
}

export default function DisplayArea() {
  const [bpmValue, setBPMValue] = useState(60);

  return (
    <>
      <DisplayNotes bpmValue={bpmValue} />

      <FreqControl
        bpmValue={bpmValue}
        setBPMValue={setBPMValue}
      />
    </>
  );
}