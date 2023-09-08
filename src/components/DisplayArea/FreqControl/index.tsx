import styles from './index.module.css'
import GoToBpmButton from "./GoToBPMButton";
import StartStopButton from "./StartStopButton";

export default function FreqControl({ 
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