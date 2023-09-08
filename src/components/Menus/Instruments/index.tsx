import {useState, useContext} from 'react'
import { SettingsContext } from '../../../config/context/SettingsContext';
import styles from './index.module.css'

import RenderFretsAndTunning from './RenderFretsAndTuning';

import instruments from '../../../config/music/instruments';

export default function InstrumentsMenu({
    visibility=true
}:{
    visibility?:boolean
}) {
    const {setInstrumentName} = useContext(SettingsContext)
    const [FretsAndTunning, setFretsAndTunning] = useState(false)
    

    const handleSelectChange = (event) => {
        const selectedInstrument = instruments[event.target.value]
        setInstrumentName(selectedInstrument.name)
        if(selectedInstrument["strings"]){
            setFretsAndTunning(true)
        }else{
            setFretsAndTunning(false)
        }
    };


    return(visibility?
        <menu id={styles.instruments}>
            <div id={styles.customSelect}>
                <select
                    name='Instrument Select'
                    id={styles.instrumentSelectElement}
                    onChange={handleSelectChange}
                >
                    {Object.keys(instruments).map(instrument =>(
                        <option
                            key={instrument}
                            value={instrument}
                            className={styles.InstrumentOptionElement}
                        >
                            {instrument}
                        </option>
                    ))}
                </select>
            </div>
            {FretsAndTunning? <RenderFretsAndTunning /> : null}
        </menu>
        :null
    )
}