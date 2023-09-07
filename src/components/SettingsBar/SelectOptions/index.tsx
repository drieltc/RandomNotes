import { useState } from "react"
import styles from './index.module.css'

export default function SelectOption({
    icon,
    content,
    isSelected,
    handleFunction,
}:{
    icon?: React.ReactNode;
    content?: string;
    isSelected?: any;
    handleFunction?: (content: string) => any;
    state?:any
}){

    const handleClick = () => {
        if (handleFunction) {
            handleFunction(content)
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