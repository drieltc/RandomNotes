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
  const {handleChordSelectAll} = useContext(SettingsContext)
  const scale = 'aug'

  return visibility ? (
    <menu id={styles.chords}>
      Chords
      <div id={styles.selections}>
        <ChordsTypes />

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
