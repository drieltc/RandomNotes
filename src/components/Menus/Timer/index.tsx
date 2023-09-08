import styles from './index.module.css'
import React, { useContext } from 'react';
import { SettingsContext } from '../../../config/context/SettingsContext';

export default function TimerMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    const {timerValue, setTimerValue} = useContext(SettingsContext)

    const turnMinSec = (time) => {
        if (typeof(time) === 'number'){
            if(time >= 0){

                const min = Math.floor(time / 60);
                const sec = time % 60;
                
                if (min > 0) {
                    return `Playing time: ${min} minute${min > 1 ? 's' : ''} and ${sec} second${sec !== 1 ? 's' : ''}`;
                } else {
                    return `Playing time: ${sec} second${sec !== 1 ? 's' : ''}`;
                }
            }
            else if (time < 0){
                return `NEGATIVE TIME`
            }
            else{
                return `Playing time: 0 seconds`
            }
        }
        else {
            return `Playing time: 0 seconds`
        }
    };

    const handleInputChange = (event) =>{
        const newTime = parseInt(event.target.value)
        setTimerValue(newTime)
        console.log(typeof(timerValue))
    }
    
    return( visibility?
        <menu id={styles.timer}>
            <p>{turnMinSec(timerValue)}</p>
            <input
                type="number"
                name=""
                id={styles.timerInput}
                value={timerValue? timerValue:''}
                onChange={handleInputChange}
            />
        </menu>
        :null
    )
}