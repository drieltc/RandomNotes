import styles from './index.module.css'
import { useContext } from 'react';
import { SettingsContext } from '../../../../config/context/SettingsContext';
import GroupSelectOptions from '../../../SettingsBar/GroupSelectOptions';

import TuningIcon from '../../../../assets/TuningIcon'
import FretsIcon from '../../../../assets/svg/FretsIcon.svg'

export default function RenderFretsAndTunning(){
    const {stringSettings, handleStringSettingsClick} = useContext(SettingsContext)

    return(
        <div id={styles.stringSettings}>
            <GroupSelectOptions
                id='stringSettings'
                states = {stringSettings}
                separator={false}
                icons={[
                    <FretsIcon className={styles.icons}/>,
                    <TuningIcon className={styles.icons}/>
                ]}
                handleFunction = {handleStringSettingsClick}
                updateMenus={false}
            />
    </div>
    )
}