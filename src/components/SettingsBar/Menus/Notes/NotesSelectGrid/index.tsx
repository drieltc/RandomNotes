import {useContext, useState, useEffect} from 'react'
import { SettingsContext } from '../../../../../config/context/SettingsContext';
import SelectOption from '../../../SelectOptions';

import styles from './index.module.css'
import notes from '../../../../../config/music/notes'


export default function NotesSelectGrid(){
    const {selectedNotes, handleNoteSelectItem, Settings} = useContext(SettingsContext)
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

    return (
        <div id={styles.selectNotes}>
            {notes[option].map((note, index) => (
                <SelectOption 
                    content={note}
                    updateMenus={false}
                    handleFunction={handleNoteSelectItem}
                    isSelected={Object.values(selectedNotes)[index]}
                    handleFunctionVar={notes['sharpSymbols'][index]}
                />
            ))}
        </div>
    )
}