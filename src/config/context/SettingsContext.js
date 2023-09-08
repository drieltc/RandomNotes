import { createContext, useState } from "react"

export const SettingsContext = createContext()

export function SettingsContextProvider({children}){
    const [playMode, setPlayMode] = useState({"timer": false, "zen": true})
    const [timerValue, setTimerValue] = useState(0)
    const [displayMode, setDisplayMode] = useState({"notes": true, "chords": false})
    const [notesSettings, setNotesSettings] = useState({"sharp": true, "flat":false})
    const [excludedNotes, setExcludedNotes] = useState([])
    const [whatToDisplay, setWhatToDisplay] = useState({"partiture": false,"name": false, "symbol": true,})
    const [instruments, setInstruments] = useState({"instruments": false})
    const [instrumentName, setInstrumentName] = useState('')
    const [stringSettings, setStringSettings] = useState({"frets":false, "tuning": false})
    const [bpmValue, setBPMValue] = useState(60)

    const [menuVisibility, setMenuVisibility] = useState({
        timer: false,
        zen: false,
        notes: true,
        chords: false,
        instruments: false,
        keep:false
    });

    const Settings = {
        playMode: playMode,
        timerValue: timerValue,
        displayMode: displayMode,
        notesSettings: notesSettings,
        excludedNotes: excludedNotes,
        whatToDisplay: whatToDisplay,
        instruments: instruments,
        instrumentName: instrumentName,
        stringSettings:stringSettings,
        bpmValue: bpmValue,
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

    function handleNotesSettingsClick(value){
        let updatedNotesSettings = {}
        if (value === "flat"){
            updatedNotesSettings = {...notesSettings, "flat":true, "sharp":false}
        }
        if (value === "sharp"){
            updatedNotesSettings = {...notesSettings, "flat":false, "sharp":true}
        }

        setNotesSettings(updatedNotesSettings)
    }

    function changeMenuVisualization(value){
        const updatedMenuVisibility = {}
        
        for (const key in menuVisibility){
            if (key != "keep"){
                menuVisibility[key] === true?
                (updatedMenuVisibility[key] = false):
                (updatedMenuVisibility[key] = key === value)
            }
            else{
                updatedMenuVisibility["keep"] = menuVisibility["keep"]
            }
            if (value === "instruments"){
                updatedMenuVisibility["keep"] = !menuVisibility["keep"]
                updatedMenuVisibility["instruments"] = updatedMenuVisibility["keep"] 
            }
        }
        setMenuVisibility(updatedMenuVisibility)
    }

    function handleStringSettingsClick(value){
        setStringSettings((prevStrings) => ({
            ...prevStrings,
            [value]: !prevStrings[value],
          }));
          console.log('pelo menos chama essa bomba')
    }
    return(

        <SettingsContext.Provider 
            value = {{
                playMode, setPlayMode, handlePlayModeClick, timerValue, setTimerValue,
                displayMode, setDisplayMode, handleDisplayModeClick, notesSettings, setNotesSettings, handleNotesSettingsClick, excludedNotes, setExcludedNotes,
                whatToDisplay, setWhatToDisplay, handleWhatToDisplayClick,
                instruments, setInstruments, handleInstrumentClick, instrumentName, setInstrumentName, stringSettings, setStringSettings, handleStringSettingsClick,
                bpmValue, setBPMValue,
                Settings,
                menuVisibility, setMenuVisibility, changeMenuVisualization
            }}>
                {children}
        </SettingsContext.Provider>
        )
}