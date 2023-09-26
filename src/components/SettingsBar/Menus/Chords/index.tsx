import { useContext } from 'react';
import { SettingsContext } from '../../../../config/context/SettingsContext';
import SelectOption from '../../SelectOptions';
import styles from './index.module.css';
import chords from '../../../../config/music/chords';

export default function ChordsMenu({
  visibility = true,
}: {
  visibility?: boolean;
}) {
  return visibility ? (
    <menu id={styles.chords}>
      Chords
      <div id={styles.selectTypesChord}>
        {chords.map((chord, index) => (
          <SelectOption 
            content={chord}
          />
        ))}
      </div>
    </menu>
  ) : null;
}
