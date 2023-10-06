import { useContext } from "react"
import styles from './index.module.css'
import { SettingsContext } from "../../../config/context/SettingsContext";

export default function SelectOption({
    icon,
    content,
    isSelected,
    handleFunction,
    updateMenus=true,
    handleFunctionVar,
    twoInputs=false,
    isActive=false,
    under=false
}:{
    icon?: React.ReactNode;
    content?: string;
    isSelected?: any;
    handleFunction?: (content: any) => any;
    updateMenus?:boolean;
    handleFunctionVar?: any;
    twoInputs?: boolean;
    isActive?: boolean;
    under?: boolean
}){

    const {changeMenuVisualization} = useContext(SettingsContext)

    const handleClick = () => {
        if (handleFunction) {
            if (twoInputs){
                const values = [handleFunctionVar, content]
                handleFunction(values)
            }
            else if (handleFunctionVar){
                handleFunction(handleFunctionVar)
            }
            else{
                handleFunction(content)
            }
        }
        if(updateMenus){
            changeMenuVisualization(content)
        }
    }

    return (
        <div className={`${styles.selectOption} ${under? styles.under : ''}`}>
            <button
                className={`${styles.select} ${isSelected ? styles.selected : ''}`}
                onClick={handleClick}
                id={content}
            >
            {icon} {content}
            </button>

            {under? <div className = {`${styles.active} ${isActive ? styles.activated : ''}`}
            ></div> : null}
        </div>
    );
}