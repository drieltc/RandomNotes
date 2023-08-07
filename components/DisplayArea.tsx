import React, { useState } from 'react';
import styles from './DisplayArea.module.css';
import Metronome from '../public/MetronomeCustomIcon.svg';
import { useSettings } from './SettingsContext';


function FreqControl({ bpmValue, setBPMValue }) {
  
  const activateButton = (value:number, sign:string) => {
    const newBPMValue = sign === '-' ? bpmValue - value : bpmValue + value;
    setBPMValue(Math.max(0, newBPMValue));
  };
  
  const ButtonsValues = [1, 5, 10, 20];
  
  const renderButtons = (sign:string) =>{
    return ButtonsValues.map((value) => (
      <button
        key={value}
        className={styles.SingleButtonBPM}
        onClick={() => activateButton(value, sign)}
        aria-label={`${sign === '-' ? 'Decrease' : 'Increase'} by ${value}`}
        >
        {`${sign === '-' ? '-' : '+'}${value}`}
      </button>
    ));
  }
  
  const handleMouseRest = () => {
    console.log('Explicação BPM')
  }
  
  return (
    <div id={styles.controllerBPM}>
      <div className={styles.buttonsContainer}>{renderButtons('-')}</div>

      <div id={styles.central}>
        <div id={styles.bpm}>

          <div id={styles.bpmValue}
            onMouseOver={handleMouseRest}
            //Continuar trabalhos aqui!!! A ideia é: se o mouse AINDA estiver por cima da div, criar renderizar um elemento falando um pouco sobre a unidade de medida usada (bpm)
            >
            {bpmValue}
          </div>
          <div id={styles.text}>bpm</div>
        </div>

        <button id={styles.customButton}>
          {/*Será que eu consigo fazer uma animação que faça o metrônomo bater na frequência definida pelo usuário?*/}
          <Metronome id={styles.metronome} />
        </button>
      </div>

      <div className={styles.buttonsContainer}>{renderButtons('+')}</div>
    </div>
  );
}

function DisplayNotes({bpmValue}){
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const { selectedOptions } = useSettings();
  
  function handleButtonClick() {
    if (isTimerRunning) {
      console.log('something');
    } else {
      console.log('something else');
    }
  }
  
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
        <button id={styles.start_stop_button} onClick={handleButtonClick}>
          {isTimerRunning ? 'Stop' : 'Start'}
        </button>
      </div>
  )
}

export default function DisplayArea() {
  const [bpmValue, setBPMValue] = useState<number>(60);
  
  return (
    <>
      <DisplayNotes bpmValue={bpmValue} />
      <FreqControl bpmValue={bpmValue} setBPMValue={setBPMValue} />
    </>
  );
}