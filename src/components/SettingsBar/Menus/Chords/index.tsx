import { useContext } from 'react';
import { SettingsContext } from '../../../../config/context/SettingsContext';

import styles from './index.module.css';
import ChordsTypes from './ChordsTypes';
import ChordsSelectGrid from './ChordsSelectGrid';
import RenderSharpOrFlat from '../Notes/RenderSharpOrFlat';
import ControlsSelect from '../Notes/ControlsSelect';

export default function ChordsMenu({
  visibility = true,
}: {
  visibility?: boolean;
}) {
  const {handleChordSelectAll, activeScale} = useContext(SettingsContext)
  const scale = activeScale

  return visibility ? (
    <menu id={styles.chords}>

      <div id={styles.selections}>

        <div id={styles.chordTypes}>
          <ChordsTypes />
        </div>

        <div id={styles.separator}></div>
        
        <div id={styles.items}>
          <ControlsSelect 
            handleFunction={handleChordSelectAll}
            handleFunctionVar={scale}
            twoInputs={true}
          />

          <ChordsSelectGrid 
            scale={scale}  
          />
          
          <RenderSharpOrFlat />
        </div>

      </div>
    </menu>
  ) : null;
}
