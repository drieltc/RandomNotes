import React, {useContext, useState} from 'react'
import styles from './Menus.module.css'
import { useSecondarySettings } from './SecondarySettingsContext';
import notes from '../music/notes'
import chords from '../music/chords'
import partiture from '../music/partiture'

export function TimerMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    const { secondarySelectedOptions, setSecondarySelectedOptions } = useSecondarySettings();
    setSecondarySelectedOptions({...secondarySelectedOptions, timer:0})

    const turnMinSec = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        
        if (min > 0) {
            return `Playing time: ${min} minute${min > 1 ? 's' : ''} and ${sec} second${sec !== 1 ? 's' : ''}`;
        } else {
            return `Playing time: ${sec} second${sec !== 1 ? 's' : ''}`;
        }
    };

    const handleInputChange = (event) =>{
        const newTime = parseInt(event.target.value)
        setSecondarySelectedOptions({...secondarySelectedOptions, timer:newTime})
    }
    
    return( visibility?
        <menu id={styles.timer}>
            <p>Playing time: {secondarySelectedOptions["timer"]} seconds</p>
            <input
                type="number"
                name=""
                id={styles.timerInput}
                value={secondarySelectedOptions["timer"]}
                onChange={handleInputChange}/>
        </menu>
        :null
    )
}

export function NotesMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    return( visibility?
        <menu id={styles.notes}>
            Notes
        </menu>
        :null
    )
}

export function ChordsMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    return(visibility?
        <menu id={styles.chords}>
            Chords
        </menu>
        :null
    )
}

export function InstrumentsMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    return(visibility?
        <menu id={styles.instruments}>
            Olá
        </menu>
        :null
    )
}