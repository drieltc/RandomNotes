import { createContext, useState } from "react"

export const SettingsContext = createContext()

export function SettingsContextProvider({children}){
    const [playMode, setPlayMode] = useState({"timer": false, "zen": true})
    const [timerValue, setTimerValue] = useState(0)
    const [displayMode, setDisplayMode] = useState({"notes": false, "chords": true})
    const [notesSettings, setNotesSettings] = useState({"sharp": true, "flat":false})
    const [selectedNotes, setSelectedNotes] = useState({'C':true, 'C#':true, 'D':true, 'D#':true, 'E':true, 'F':true, 'F#':false, 'G':true, 'G#':true, 'A':true, 'A#':true, 'B':true})

    const [selectedChords, setSelectedChords] = useState({
        'C':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'C#':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'D':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'D#':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'E':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'F':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'F#':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'G':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'G#':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'A':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'A#':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
        'B':{
            'M':{
                'selected': false,
                'augmented': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'm':{
                'selected': false,
                'diminished': false,
                'sixth': false,
                'seventh': false,
                'ninth': false
            },
            'sus2': false,
            'sus4': false
        },
    })
    const[selectedChords2, setSelectedChords2] = useState({
        'major':{
            selected: false,
            active: true,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'aug':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'M6':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'M7':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'M9':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'minor':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'dim':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'm6':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'm7':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'm9':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'sus2':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'sus4':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
        'dom':{
            selected: false,
            active: false,
            chords:{
                'C': false,
                'C#': false,
                'D': false,
                'D#': false,
                'E': false,
                'F': false,
                'F#': false,
                'G': false,
                'G#': false,
                'A': false,
                'A#': false,
                'B': false
            }
        },
    })
    const [activeScale, setActiveScale] = useState('major')
    const [whatToDisplay, setWhatToDisplay] = useState({"partiture": false,"name": false, "symbol": true,})
    const [instruments, setInstruments] = useState({"instruments": false})
    const [instrumentName, setInstrumentName] = useState('')
    const [stringSettings, setStringSettings] = useState({"frets":false, "tuning": false})
    const [bpmValue, setBPMValue] = useState(60)

    const [menuVisibility, setMenuVisibility] = useState({
        timer: false,
        zen: false,
        notes: false,
        chords: true,
        instruments: false,
        keep: false
    });

    const Settings = {
        //playMode: playMode,
        //timerValue: timerValue,
        //displayMode: displayMode,
        notesSettings: notesSettings,
        //selectedNotes: selectedNotes,
        selectedChords2: selectedChords2,
        activeScale: activeScale,
        whatToDisplay: whatToDisplay,
        //instruments: instruments,
        //instrumentName: instrumentName,
        //stringSettings: stringSettings,
        //bpmValue: bpmValue,
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
      
    function handleChordSelectItem(values){
        const scale = values[1]
        const chord = values[0]
        setSelectedChords2((prevChords) => ({
            ...prevChords,
            [scale]: {
                ...prevChords[scale],
                chords: {
                    ...prevChords[scale].chords,
                    [chord]: !prevChords[scale].chords[chord]
                }
            }
        }))
    }

    function handleChordSelectAll(values){
        const scale = values[0]
        const content = values[1]
        let updatedSelectedChords = {}
        if (content == 'check all'){
            for (const chord in selectedChords2[scale].chords){
                updatedSelectedChords[chord] = true
            }
        }
        else if (content == 'uncheck all'){
            for (const chord in selectedChords2[scale].chords){
                updatedSelectedChords[chord] = false
            }
        }
        setSelectedChords2((prevScales) => ({
            ...prevScales,
            [scale]:{
                ...prevScales[scale],
                chords: updatedSelectedChords
            }
        }))
    }

    function handleActiveTypeChord(value){
        let newSelectedChords2 = {...selectedChords2}
        
        for (const scale in newSelectedChords2) {
            newSelectedChords2[scale].active = scale === value;
          }

        setSelectedChords2(newSelectedChords2)
        setActiveScale(value)
    }

    return(
        <SettingsContext.Provider 
            value = {{
                playMode, setPlayMode, handlePlayModeClick, timerValue, setTimerValue,
                displayMode, setDisplayMode, handleDisplayModeClick, notesSettings, setNotesSettings, handleNotesSettingsClick, selectedNotes, setSelectedNotes, handleNoteSelectItem, handleNoteSelectAll, selectedChords, setSelectedChords,
                selectedChords2, setSelectedChords2, handleChordSelectItem, handleChordSelectAll, handleActiveTypeChord, activeScale, setActiveScale,
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