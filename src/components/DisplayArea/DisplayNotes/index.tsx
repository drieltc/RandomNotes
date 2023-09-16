import {useContext} from 'react'
import { SettingsContext } from '../../../config/context/SettingsContext';
import styles from './index.module.css'

export default function DisplayNotes(){
    const { Settings } = useContext(SettingsContext);
    return (
      <div className={styles.displayAreaContainer}>
          <div id={styles.notesContainer}>
            <div id={styles.notes}>
              <div>
                <h3>Selected Options:</h3>
                  <pre>{JSON.stringify(Settings, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
    )
  }