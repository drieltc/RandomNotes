import { useContext } from 'react';
import { SettingsContext } from '../../../../../config/context/SettingsContext';
import SelectOption from '../../../SelectOptions';
import styles from './index.module.css';
import chords from '../../../../../config/music/chords';

export default function ChordsTypes(){
    const {selectedChords2, handleActiveTypeChord} = useContext(SettingsContext)
    return(
        <div id={styles.selectTypesChord}>
        {chords.map((chord, index) => (
          <SelectOption
            key={chord}
            content={chord}
            updateMenus={false}
            isSelected={Object.values(selectedChords2)[index]['selected']}
            isActive={Object.values(selectedChords2)[index]['active']}
            handleFunction={handleActiveTypeChord}
            handleFunctionVar={chord}
            under={true}
          />
        ))}
      </div>
    )
}
//ver como vai funcionar essa parte de abrir um tipo novo de acorde