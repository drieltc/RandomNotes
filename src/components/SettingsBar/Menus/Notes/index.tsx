import styles from './index.module.css'
import RenderSharpOrFlat from './RenderSharpOrFlat';
import NotesSelectGrid from './NotesSelectGrid';
import ControlsSelect from './ControlsSelect';
import { useContext } from 'react';
import { SettingsContext } from '../../../../config/context/SettingsContext';

export default function NotesMenu({
    visibility=true
}:{
    visibility?:boolean
}) {
    const {handleNoteSelectAll} = useContext(SettingsContext)
    return( visibility?
        <menu id={styles.notes}>
            <ControlsSelect 
                handleFunction={handleNoteSelectAll}
            />
            <NotesSelectGrid />
            <RenderSharpOrFlat />
        </menu>
        :null
    )
}