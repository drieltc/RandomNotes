import React, { useState } from 'react';
import styles from './DisplayArea.module.css';
import Metronome from '../public/metronome.svg';
function FreqControl() {
  const [bpmValue, setBPMValue] = useState<number>(60);

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

export default function DisplayArea() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  function handleButtonClick() {
    if (isTimerRunning) {
      console.log('something');
    } else {
      console.log('something else');
    }
  }

  return (
    <>
      <div className={styles.displayAreaContainer}>
        <div id={styles.notesContainer}>
          <div id={styles.notes}></div>
        </div>
        <button id={styles.start_stop_button} onClick={handleButtonClick}>
          {isTimerRunning ? 'Stop' : 'Start'}
        </button>
      </div>

      <FreqControl />
    </>
  );
}