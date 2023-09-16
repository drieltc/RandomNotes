import GroupSelectOptions from '../../../../SettingsBar/GroupSelectOptions';
import { useContext } from 'react';
import { SettingsContext } from '../../../../../config/context/SettingsContext';

import styles from './index.module.css'
import CheckIcon from '../../../../../assets/svg/checkCircleIcon.svg'
import UncheckIcon from '../../../../../assets/svg/xCircleIcon.svg'

export default function ControlsSelect(){
    const {handleNoteSelectAll} = useContext(SettingsContext)
    const options = {
        'check all': false,
        'uncheck all': false,
    }

    return (
        <div id={styles.controlsSelect}>
            <GroupSelectOptions 
                id = 'controlsSelectItem'
                states = {options}
                separator = {false}
                icons={[
                    <CheckIcon className={styles.icons} />,
                    <UncheckIcon className={styles.icons}/>
                ]}
                handleFunction={handleNoteSelectAll}
                updateMenus = {false}
            />
        </div>
    )
}