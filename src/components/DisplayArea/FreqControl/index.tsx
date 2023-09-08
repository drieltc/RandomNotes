import styles from './index.module.css'
import { use, useContext } from 'react';
import { SettingsContext } from '../../../config/context/SettingsContext';
import GoToBpmButton from "./GoToBPMButton";
import StartStopButton from "./StartStopButton";
import Slider from './Slider';

export default function FreqControl() {

  const {bpmValue} = useContext(SettingsContext)
    const handleMouseRest = () => {
      console.log('Explicação BPM')
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
          <Slider />
      </div>
    );
}