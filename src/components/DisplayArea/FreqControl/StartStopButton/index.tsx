import {useState, useContext} from 'react'
import { SettingsContext } from '../../../../config/context/SettingsContext'

import styles from './index.module.css'

import PlayIcon from '../../../../assets/svg/PlayIcon.svg'
import PauseIcon from '../../../../assets/svg/PauseIcon.svg'

export default function StartStopButton(bpm){
    const { playMode, displayMode, whatToDisplay, instruments } = useContext(SettingsContext);
  
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
          playMode: playMode,
          displayMode: displayMode,
          whatToDisplay: whatToDisplay,
          instrumentSettings: instruments,
          bpm: bpm,
        })}
      >
        {isTimerRunning ? <PauseIcon /> : <PlayIcon />}
      </button>
    )
}