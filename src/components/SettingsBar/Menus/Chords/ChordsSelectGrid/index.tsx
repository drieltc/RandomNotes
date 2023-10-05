import {useContext, useState, useEffect} from 'react'
import { SettingsContext } from '../../../../../config/context/SettingsContext'
import SelectOption from '../../../SelectOptions'

import styles from './index.module.css'

import notes from '../../../../../config/music/notes'

export default function ChordsSelectGrid({scale}:{scale?:string}){
    const {selectedChords2, handleChordSelectItem, Settings} = useContext(SettingsContext)

    const [option, setOption] = useState('sharpSymbols')

    useEffect(() => {
        let newOption = ''
        if (Settings.whatToDisplay.symbol|| (!Settings.whatToDisplay.symbol && !Settings.whatToDisplay.name)){
            if(Settings.notesSettings.sharp){
                newOption = 'sharpSymbols'
            }
            else{
                newOption = 'flatSymbols'
            }
        }
        else if (Settings.whatToDisplay.name && !Settings.whatToDisplay.symbol){
            if(Settings.notesSettings.sharp){
                newOption = 'sharpNames'
            }
            else{
                newOption = 'flatNames'
            }
        }
        setOption(newOption)
    }, [Settings.whatToDisplay.name, Settings.whatToDisplay.symbol, Settings.notesSettings])

    return(
        <div id={styles.selectChords}>
            {notes[option].map((note, index) =>(
                <SelectOption 
                    content={note}
                    updateMenus={false}
                    handleFunction={handleChordSelectItem}
                    isSelected={Object.values(selectedChords2[scale]['chords'])[index]}
                    handleFunctionVar={[notes['sharpSymbols'][index], scale]}
                />
            ))}
        </div>
    )
}