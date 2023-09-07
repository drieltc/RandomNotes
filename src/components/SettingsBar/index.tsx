import React, { useContext } from 'react';
import { SettingsContext } from '../../config/context/SettingsContext';

import GroupSelectOptions from "./GroupSelectOptions";
import styles from './SettingsBar.module.css'

import TimerIcon from '../../assets/svg/TimerIcon.svg';
import ZenIcon from '../../assets/svg/ZenIcon.svg'

import NoteIcon from '../../assets/svg/NotesMusic-NotesIcon.svg'
import ChordIcon from '../../assets/svg/ChordsIcon.svg'

import PartitureIcon from '../../assets/svg/PartitureIcon.svg'
import NameIcon from "../../assets/NameIcon";
import SymbolIcon from "../../assets/SymbolIcon";

import GuitarInstrumentIcon from '../../assets/svg/GuitarInstrumentIcon.svg'

export default function SettingsBar(){
    const {playMode, handlePlayModeClick, displayMode, handleDisplayModeClick, whatToDisplay, handleWhatToDisplayClick, instruments, handleInstrumentClick} = useContext(SettingsContext)
    
    return(
        <div className={styles.settings}>
            <div className={styles.rowSettings}>
                <GroupSelectOptions
                    id='playMode'
                    states={playMode}
                    icons={[
                        <TimerIcon className={styles.icon}/>,
                        <ZenIcon className={styles.icon}/>
                    ]}
                    handleFunction = {handlePlayModeClick}
                />

                <GroupSelectOptions
                    id='displayMode'
                    states = {displayMode}
                    icons = {[
                        <NoteIcon className={styles.icon}/>,
                        <ChordIcon className={styles.icon}/>
                    ]}
                    handleFunction = {handleDisplayModeClick}
                />  

                <GroupSelectOptions
                    id='whatToDisplay'
                    states = {whatToDisplay}
                    icons={[
                        <PartitureIcon className={styles.icon} />,
                        <NameIcon className={styles.icons} />,
                        <SymbolIcon className={styles.icons} />
                    ]}
                    handleFunction = {handleWhatToDisplayClick}
                />

                <GroupSelectOptions
                    id='instrumentSettings'
                    states = {instruments}
                    separator={false}
                    icons={[
                        <GuitarInstrumentIcon className={styles.icon}/>
                    ]}
                    handleFunction = {handleInstrumentClick}
                />
            </div>
        </div>
    )
}