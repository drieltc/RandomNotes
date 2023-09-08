import React, {useContext, useState, useEffect} from 'react'
import styles from './Menus.module.css'
import notes from '../../config/music/notes'
import chords from '../../config/music/chords'
import partiture from '../../config/music/partiture'
import instruments from '../../config/music/instruments'

import SharpIcon from '../../assets/SharpIcon'
import FlatIcon from '../../assets/FlatIcon'
import TuningIcon from '../../assets/TuningIcon';
import FretsIcon from '../../assets/svg/FretsIcon.svg'

export function TimerMenu({
    visibility=true
}:{
    visibility:boolean
}) {

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
        
        const [myNotes, setMyNotes] = useState()
                
        const [isSelected, setIsSelected] = useState<boolean[]>([false, false]);


        function RenderSharpOrFlat(){
        
            const options = ["Sharp", "Flat"]
            const icons = [<SharpIcon className={styles.icons} />, <FlatIcon className={styles.icons}/>]
    
            const handleButtonClick = (index) => {
                setIsSelected(prevSelected => {
                    const newSelected = [...prevSelected]; // Create a copy of the array
                    newSelected[index] = !newSelected[index]; // Toggle the value at the specified index
                    return newSelected;
                });
            };
        
            return(
                <div id={styles.sharp_flat}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`${styles.select} ${isSelected[index] ? styles.selected : ''}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {icons[index]}{option}
                    </button>
                ))}
            </div>
            )
        }

    return( visibility?
        <menu id={styles.notes}>
            Notes
            <RenderSharpOrFlat />
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
    const [ FretsAndTunning, setFretsAndTunning ] = useState<boolean>(false)

    const [isSelected, setIsSelected] = useState<boolean[]>([false, false]);
    const [instrument, setInstrument] = useState<string>(null)

    
    function RenderFretsAndTunning(){
        
        const options = ["Frets", "Tuning"]
        const icons = [<FretsIcon className={styles.icons} />, <TuningIcon className={styles.icons}/>]

        const handleButtonClick = (index) => {
            setIsSelected(prevSelected => {
                const newSelected = [...prevSelected]; // Create a copy of the array
                newSelected[index] = !newSelected[index]; // Toggle the value at the specified index
                return newSelected;
            });
        };

    
        return(
            <div id={styles.frets_tuning}>
            {options.map((option, index) => (
                <button
                    key={index}
                    className={`${styles.select} ${isSelected[index] ? styles.selected : ''}`}
                    onClick={() => handleButtonClick(index)}
                >
                    {icons[index]}{option}
                </button>
            ))}
        </div>
        )
    }
    

    const handleSelectChange = (event) => {
        const selectedInstrument = instruments[event.target.value]
        setInstrument(selectedInstrument.name)
        if(selectedInstrument["strings"]){
            setFretsAndTunning(true)
        }else{
            setFretsAndTunning(false)
        }
    };


    return(visibility?
        <menu id={styles.instruments}>
            <div id={styles.customSelect}>
                <select
                    name='Instrument Select'
                    id={styles.instrumentSelectElement}
                    onChange={handleSelectChange}
                >
                    {Object.keys(instruments).map(instrument =>(
                        <option
                            key={instrument}
                            value={instrument}
                            className={styles.InstrumentOptionElement}
                        >
                            {instrument}
                        </option>
                    ))}
                </select>
            </div>
            {FretsAndTunning? <RenderFretsAndTunning /> : null}
        </menu>
        :null
    )
}