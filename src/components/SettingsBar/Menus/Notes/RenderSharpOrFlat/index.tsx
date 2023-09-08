import styles from './index.module.css'
import { useContext } from 'react';
import { SettingsContext } from '../../../../../config/context/SettingsContext';
import GroupSelectOptions from '../../../../SettingsBar/GroupSelectOptions';

import SharpIcon from "../../../../../assets/SharpIcon";
import FlatIcon from "../../../../../assets/FlatIcon";

export default function RenderSharpOrFlat(){
    
    const {notesSettings, handleNotesSettingsClick} = useContext(SettingsContext)

    return(
        <div id={styles.notesSettings}>
            <GroupSelectOptions 
                id = 'notesSettings'
                states = {notesSettings}
                separator = {false}
                icons={[
                    <SharpIcon className={styles.icons} />,
                    <FlatIcon className={styles.icons}/>
                ]}
                handleFunction={handleNotesSettingsClick}
                updateMenus = {false}
            />
    </div>
    )
}