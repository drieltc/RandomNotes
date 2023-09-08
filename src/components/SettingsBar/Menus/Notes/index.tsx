import {useContext} from 'react'
import { SettingsContext } from '../../../../config/context/SettingsContext';

import styles from './index.module.css'
import RenderSharpOrFlat from './RenderSharpOrFlat';

import notes from '../../../../config/music/notes'

export default function NotesMenu({
    visibility=true
}:{
    visibility?:boolean
}) {
    const {excludedNotes} = useContext(SettingsContext)

    return( visibility?
        <menu id={styles.notes}>
            Notes
            <RenderSharpOrFlat />
        </menu>
        :null
    )
}