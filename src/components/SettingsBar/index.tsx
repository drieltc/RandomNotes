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

import TimerMenu from '../Menus/Timer';
import NotesMenu from '../Menus/Notes';
import ChordsMenu from '../Menus/Chords';
import InstrumentsMenu from '../Menus/Instruments';

export default function SettingsBar(){
    const {playMode, handlePlayModeClick, displayMode, handleDisplayModeClick, whatToDisplay, handleWhatToDisplayClick, instruments, handleInstrumentClick, menuVisibility} = useContext(SettingsContext)

    const groupsOptions = {
        playMode: [playMode, handlePlayModeClick, [<TimerIcon/>, <ZenIcon />]],
        displayMode: [displayMode, handleDisplayModeClick, [<NoteIcon/>, <ZenIcon />]],
        whatToDisplay:[whatToDisplay, handleWhatToDisplayClick, [<PartitureIcon />, <NameIcon />, <SymbolIcon />], {updateMenus:false}],
        instruments: [instruments, handleInstrumentClick, [<GuitarInstrumentIcon />], {separator: false}]
    }
    
    const groupMenus = {
        timerMenu: ['timerMenu', <TimerMenu />, ['timer']],
        notesMenu: ['notesMenu', <NotesMenu />, ['notes']],
        chordsMenu: ['chordsMenu', <ChordsMenu />, ['chords']],
        instrumentsMenu: ['instrumentsMenu', <InstrumentsMenu />, ['instruments', 'keep']]
    }

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
                    updateMenus = {false}
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
            <div id={styles.menus}>
                <div id='timerMenu'>
                    <TimerMenu 
                        visibility={menuVisibility["timer"]}
                    />
                </div>
                <div id='notesMenu'>
                    <NotesMenu 
                        visibility={menuVisibility["notes"]}
                    />
                </div>
                <div id='chordsMenu'>
                    <ChordsMenu 
                        visibility={menuVisibility["chords"]}
                    />
                </div>
                <div id='instrumentsMenu'>
                    <InstrumentsMenu
                        visibility={menuVisibility["instruments"] && menuVisibility["keep"]}
                    />
                </div>
          </div>
        </div>
    )
}