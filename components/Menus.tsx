import React, {useState} from 'react'
import styles from './Menus.module.css'
import notes from '../music/notes'
import chords from '../music/chords'
import partiture from '../music/partiture'

export function TimerMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    const [time, setTime] = useState<number>(60)
    const countdown = () =>{
        while(time > 0){
            setTime(time -1)
        }
    }

    const turnMinSec = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        
        if (min > 0) {
            return `Playing time: ${min} minute${min > 1 ? 's' : ''} and ${sec} second${sec !== 1 ? 's' : ''}`;
        } else {
            return `Playing time: ${sec} second${sec !== 1 ? 's' : ''}`;
        }
    };
    
    return( visibility?
        <menu id={styles.timer}>
            Playing time: {time} seconds
            <input type="number" name="" id={styles.timerInput} value={time}/>
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