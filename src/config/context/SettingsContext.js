import { createContext, useState } from "react"

export const SettingsContext = createContext()

export function SettingsContextProvider({children}){
    const [playMode, setPlayMode] = useState({"timer": false, "zen": true})
    const [timerValue, setTimerValue] = useState(0)
    const [displayMode, setDisplayMode] = useState({"notes": true, "chords": false})
    const [notesSettings, setNotesSettings] = useState({"sharp": true, "flat":false})
    const [selectedNotes, setSelectedNotes] = useState({'C':true, 'C#':true, 'D':true, 'D#':true, 'E':true, 'F':true, 'F#':false, 'G':true, 'G#':true, 'A':true, 'A#':true, 'B':true})
    const [selectedMajorChords, setSelectedMajorChords] = useState({'C':false, 'C#':false, 'D':false, 'D#':false, 'E':false, 'F':false, 'F#':false, 'G':false, 'G#':false, 'A':false, 'A#':false, 'B':false})
    const [selectedMajorSeventhChords, setSelectedMajorSeventhChords] = useState({'C':false, 'C#':false, 'D':false, 'D#':false, 'E':false, 'F':false, 'F#':false, 'G':false, 'G#':false, 'A':false, 'A#':false, 'B':false})
    const [selectedAugmentedChords, setSelectedAugmentedChords] = useState({'C':false, 'C#':false, 'D':false, 'D#':false, 'E':false, 'F':false, 'F#':false, 'G':false, 'G#':false, 'A':false, 'A#':false, 'B':false})
    const [selectedMinorChords, setSelectedMinorChords] = useState({'C':false, 'C#':false, 'D':false, 'D#':false, 'E':false, 'F':false, 'F#':false, 'G':false, 'G#':false, 'A':false, 'A#':false, 'B':false})
    const [selectedMinorSeventhChords, setSelectedMinorSeventhChords] = useState({'C':false, 'C#':false, 'D':false, 'D#':false, 'E':false, 'F':false, 'F#':false, 'G':false, 'G#':false, 'A':false, 'A#':false, 'B':false})
    const [selectedDiminishedChords, setSelectedDiminishedChords] = useState({'C':false, 'C#':false, 'D':false, 'D#':false, 'E':false, 'F':false, 'F#':false, 'G':false, 'G#':false, 'A':false, 'A#':false, 'B':false})
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
        keep: false
    });

    const Settings = {
        playMode: playMode,
        timerValue: timerValue,
        displayMode: displayMode,
        notesSettings: notesSettings,
        selectedNotes: selectedNotes,
        selectedMajorChords: selectedMajorChords,
        selectedMajorSeventhChords: selectedMajorSeventhChords,
        selectedAugmentedChords:selectedAugmentedChords,
        selectedMinorChords: selectedMinorChords,
        selectedMinorSeventhChords: selectedMinorSeventhChords,
        selectedDiminishedChords: selectedDiminishedChords,
        whatToDisplay: whatToDisplay,
        instruments: instruments,
        instrumentName: instrumentName,
        stringSettings: stringSettings,
        bpmValue: bpmValue,
    }
   
    function handlePlayModeClick(value){
        let updatedPlayMode = {}
        if (value === "zen"){
            updatedPlayMode = {...playMode, "timer": false, "zen": true}
        }
        if (value === "timer"){
            updatedPlayMode = {...playMode, "timer": true, "zen": false}
        }
        setPlayMode(updatedPlayMode)
    }
    
    function handleDisplayModeClick(value){
        let updatedDisplayMode = {}
        if (value === "notes"){
            updatedDisplayMode = {...displayMode, "notes": true, "chords": false}
        }
        if (value === "chords"){
            updatedDisplayMode = {...displayMode, "notes": false, "chords": true}
        }

        setDisplayMode(updatedDisplayMode)
    }
    
    function handleWhatToDisplayClick(value) {
        const hasOtherTrueValue = Object.values(whatToDisplay).filter((item) => item === true).length;

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
            updatedNotesSettings = {...notesSettings, "flat": true, "sharp": false}
        }
        if (value === "sharp"){
            updatedNotesSettings = {...notesSettings, "flat": false, "sharp": true}
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
    }

    function handleNoteSelectItem(value){
        setSelectedNotes((prevNote) => ({
            ...prevNote,
            [value]: !prevNote[value],
        }));
    }

    function handleNoteSelectAll(value) {
        let updatedSelectedNotes = {};
      
        if (value === 'check all') {
          // Set all notes to true
          for (const note in selectedNotes) {
            updatedSelectedNotes[note] = true;
          }
        } else if (value === 'uncheck all') {
          // Set all notes to false
          for (const note in selectedNotes) {
            updatedSelectedNotes[note] = false;
          }
        }
      
        setSelectedNotes(updatedSelectedNotes);
      }
      

    return(

        <SettingsContext.Provider 
            value = {{
                playMode, setPlayMode, handlePlayModeClick, timerValue, setTimerValue,
                displayMode, setDisplayMode, handleDisplayModeClick, notesSettings, setNotesSettings, handleNotesSettingsClick, selectedNotes, setSelectedNotes, handleNoteSelectItem, handleNoteSelectAll,
                selectedMajorChords, setSelectedMajorChords, selectedAugmentedChords, setSelectedAugmentedChords, selectedMajorSeventhChords, setSelectedMajorSeventhChords, selectedMinorChords, setSelectedMinorChords, selectedDiminishedChords, setSelectedDiminishedChords, selectedMinorSeventhChords, setSelectedMinorSeventhChords,
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