import { createContext, useState } from "react"

export const SettingsContext = createContext()

export function SettingsContextProvider({children}){
    const [playMode, setPlayMode] = useState({"timer": false, "zen": true})
    const [timerValue, setTimerValue] = useState(0)
    const [displayMode, setDisplayMode] = useState({"notes": true, "chords": false})
    const [notesVisual, setNotesVisual] = useState({"sharp": true, "flat":false})
    const [excludedNotes, setExcludedNotes] = useState([])
    const [whatToDisplay, setWhatToDisplay] = useState({"partiture": false,"name": false, "symbol": true,})
    const [instruments, setInstruments] = useState({"instruments": false})
    const [instrumentName, setInstrumentName] = useState('')
    const [frets, setFrets] = useState(false)
    const [tuning, setTuning] = useState(false)
    const [bpmValue, setBPMValue] = useState(60)
    const Settings = {
        playMode: playMode,
        displayMode: displayMode,
        whatToDisplay: whatToDisplay,
        instruments: instruments,
        bpmValue: bpmValue,
        instrumentName: instrumentName,
        frets: frets,
        tuning: tuning,
        notesVisual: notesVisual,
        excludedNotes: excludedNotes,
        timerValue: timerValue,
    }
   
    function handlePlayModeClick(value){
        let updatedPlayMode = {}
        if (value === "zen"){
            updatedPlayMode = {...playMode, "timer": false, "zen":true}
        }
        if (value === "timer"){
            updatedPlayMode = {...playMode, "timer": true, "zen":false}
        }
        setPlayMode(updatedPlayMode)
    }
    
    function handleDisplayModeClick(value){
        let updatedDisplayMode = {}
        if (value === "notes"){
            updatedDisplayMode = {...displayMode, "notes":true, "chords":false}
        }
        if (value === "chords"){
            updatedDisplayMode = {...displayMode, "notes":false, "chords":true}
        }

        setDisplayMode(updatedDisplayMode)
    }
    
    function handleWhatToDisplayClick(value) {
        const hasOtherTrueValue = Object.values(whatToDisplay).filter((item) => item === true).length;
        console.log(hasOtherTrueValue)
      
        if (hasOtherTrueValue > 1 || whatToDisplay[value] === false) {
          setWhatToDisplay((prevDisplay) => ({
            ...prevDisplay,
            [value]: !prevDisplay[value],
          }));
        }
    }
      
    function handleInstrumentClick(value){
        const updatedInstruments = {...instruments, "instruments": !instruments[value]}
        setInstruments(updatedInstruments)
    }

    function handleNotesVisualClick(value){
        let updatedNotesVisual = {}
        if (value === "flat"){
            updatedDisplayMode = {...displayMode, "flat":true, "sharp":false}
        }
        if (value === "sharp"){
            updatedDisplayMode = {...displayMode, "flat":false, "sharp":true}
        }

        setDisplayMode(updatedDisplayMode)
    }
    return(

        <SettingsContext.Provider 
            value = {{
                playMode, setPlayMode, handlePlayModeClick, timerValue, setTimerValue,
                displayMode, setDisplayMode, handleDisplayModeClick, notesVisual, setNotesVisual, handleNotesVisualClick, excludedNotes, setExcludedNotes,
                whatToDisplay, setWhatToDisplay, handleWhatToDisplayClick,
                instruments, setInstruments, handleInstrumentClick, instrumentName, setInstrumentName, frets, setFrets, tuning, setTuning,
                bpmValue, setBPMValue,
                Settings,
            }}>
                {children}
        </SettingsContext.Provider>
        )
}