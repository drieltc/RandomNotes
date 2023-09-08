import React, { useContext } from 'react';
import { SettingsContext } from '../../config/context/SettingsContext';
import GroupSelectOptions from "./GroupSelectOptions";
import styles from './index.module.css'

import TimerIcon from '../../assets/svg/TimerIcon.svg';
import ZenIcon from '../../assets/svg/ZenIcon.svg'

import NoteIcon from '../../assets/svg/NotesMusic-NotesIcon.svg'
import ChordIcon from '../../assets/svg/ChordsIcon.svg'

import PartitureIcon from '../../assets/svg/PartitureIcon.svg'
import NameIcon from "../../assets/NameIcon";
import SymbolIcon from "../../assets/SymbolIcon";

import GuitarInstrumentIcon from '../../assets/svg/GuitarInstrumentIcon.svg'

import TimerMenu from './Menus/Timer';
import NotesMenu from './Menus/Notes';
import ChordsMenu from './Menus/Chords';
import InstrumentsMenu from './Menus/Instruments';

export default function SettingsBar(){
    const {playMode, handlePlayModeClick, displayMode, handleDisplayModeClick, whatToDisplay, handleWhatToDisplayClick, instruments, handleInstrumentClick, menuVisibility} = useContext(SettingsContext)

    const groupsOptions = {
        'playMode': [playMode, handlePlayModeClick, [<TimerIcon/>, <ZenIcon />]],
        'displayMode': [displayMode, handleDisplayModeClick, [<NoteIcon/>, <ChordIcon />]],
        'whatToDisplay':[whatToDisplay, handleWhatToDisplayClick, [<PartitureIcon />, <NameIcon />, <SymbolIcon />], {updateMenus:false}],
        'instruments': [instruments, handleInstrumentClick, [<GuitarInstrumentIcon />], {separator: false}]
    }
    
    const groupMenus = {
        'timerMenu': <TimerMenu visibility = {menuVisibility["timer"]}/>,
        'notesMenu': <NotesMenu visibility = {menuVisibility["notes"]}/>,
        'chordsMenu': <ChordsMenu visibility = {menuVisibility["chords"]}/>,
        'instrumentsMenu': <InstrumentsMenu visibility = {menuVisibility["instruments"] && menuVisibility["keep"]}/>,
    }

    return(
        <div className={styles.settings}>
            <div className={styles.rowSettings}>

            {Object.entries(groupsOptions).map(([optionKey, optionValue]) => (
                    <GroupSelectOptions
                        key={optionKey}
                        id={optionKey}
                        states={optionValue[0]}
                        handleFunction={optionValue[1]}
                        icons={optionValue[2]}
                        updateMenus={optionValue[3]?.updateMenus}
                        separator={optionValue[3]?.separator}
                    />
                ))}
            </div>
            <div id={styles.menus}>

                {Object.entries(groupMenus).map(([optionKey, optionValue]) => (
                    <div id={optionKey}>
                        {optionValue}
                    </div>
                ))}

          </div>
        </div>
    )
}