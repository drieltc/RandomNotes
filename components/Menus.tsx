import React, {useContext, useState, useEffect} from 'react'
import styles from './Menus.module.css'
import { useSecondarySettings } from './SecondarySettingsContext';
import notes from '../music/notes'
import chords from '../music/chords'
import partiture from '../music/partiture'
import { type } from 'os';

export function TimerMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    const { secondarySelectedOptions, setSecondarySelectedOptions } = useSecondarySettings();

    useEffect(() => {
        setSecondarySelectedOptions({ timer: '' });
    }, []);

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
        }
        else {
            return `Playing time: 0 seconds`
        }
    };

    const handleInputChange = (event) =>{
        const newTime = parseInt(event.target.value)
        setSecondarySelectedOptions({
            ...secondarySelectedOptions,
            timer:
            isNaN(newTime)?
            undefined : parseInt(newTime.toString(), 10)
        })
    }
    
    return( visibility?
        <menu id={styles.timer}>
            <p>{turnMinSec(secondarySelectedOptions["timer"])}</p>
            <input
                type="number"
                name=""
                id={styles.timerInput}
                value={secondarySelectedOptions["timer"]?secondarySelectedOptions["timer"]:''}
                onChange={handleInputChange}
            />
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