import { useContext } from 'react';
import { SettingsContext } from '../../../../config/context/SettingsContext';
import styles from './index.module.css'
import MinusIcon from '../../../../assets/svg/MinusIcon.svg'
import PlusIcon from '../../../../assets/svg/PlusIcon.svg'

export default function Slider(){

    const {bpmValue, setBPMValue} = useContext(SettingsContext)

    const handleSliderChange = (event) => {
        const newBPMValue = parseInt(event.target.value);
        setBPMValue(newBPMValue);
    };

    const handleButtonClick = (sign:string, value:number) => {
        if (bpmValue <= 249 && bpmValue >=2){
            setBPMValue(sign === '+' ? bpmValue + value : bpmValue - value);
        }   
    };

    return (
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
    )
}