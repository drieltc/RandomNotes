import {useContext} from 'react'
import { SettingsContext } from '../../../config/context/SettingsContext';

import styles from './index.module.css'
import RenderSharpOrFlat from './RendeSharpOrFlat';

export default function NotesMenu({
    visibility=true
}:{
    visibility:boolean
}) {
    return( visibility?
        <menu id={styles.notes}>
            Notes
            <RenderSharpOrFlat />
        </menu>
        :null
    )
}