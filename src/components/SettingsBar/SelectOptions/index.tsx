import { useState, useContext } from "react"
import styles from './index.module.css'
import { SettingsContext } from "../../../config/context/SettingsContext";

export default function SelectOption({
    icon,
    content,
    isSelected,
    handleFunction,
    updateMenus=true
}:{
    icon?: React.ReactNode;
    content?: string;
    isSelected?: any;
    handleFunction?: (content: string) => any;
    state?:any;
    updateMenus?:boolean;
}){

    const {changeMenuVisualization} = useContext(SettingsContext)

    const handleClick = () => {
        if (handleFunction) {
            handleFunction(content)
        }
        if(updateMenus){
            changeMenuVisualization(content)
        }
    }

    return (
        <>
            <button
                className={`${styles.select} ${isSelected ? styles.selected : ''}`}
                onClick={handleClick}
                id={content}
            >
            {icon} {content}
            </button>
        </>
    );
}