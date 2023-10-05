import GroupSelectOptions from '../../../../SettingsBar/GroupSelectOptions';

import styles from './index.module.css'
import CheckIcon from '../../../../../assets/svg/checkCircleIcon.svg'
import UncheckIcon from '../../../../../assets/svg/xCircleIcon.svg'

export default function ControlsSelect({
    handleFunction,
    handleFunctionVar,
    twoInputs
}:{
    handleFunction?: (content: string) => any;
    handleFunctionVar?: any;
    twoInputs?:boolean
}){
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
                handleFunction={handleFunction}
                handleFunctionVar={handleFunctionVar}
                updateMenus = {false}
                twoInputs={twoInputs}
            />
        </div>
    )
}