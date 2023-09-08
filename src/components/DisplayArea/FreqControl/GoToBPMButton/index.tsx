import {useContext} from 'react'
import { SettingsContext } from '../../../../config/context/SettingsContext';
import styles from './index.module.css'

export default function GoToBpmButton({ value }: { value: number }) {
    const {setBPMValue} = useContext(SettingsContext)
    return (
      <button onClick={() => setBPMValue(value)} className={styles.goToBpmButton}>
        {value}<span>bpm</span>
      </button>
    );
  }