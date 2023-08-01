import React, { useState, useEffect } from 'react';
import styles from "./DisplayArea.module.css"

const Container = () => {
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    function handleButtonClick(){
        if (isTimerRunning){
            console.log("something")
        }else{
            console.log('something else')
        }
    }

    return (
      <div className="container">
        <div id={styles.notesContainer}>
          <div id={styles.notes}></div>
        </div>
        <button id={styles.start_stop_button} onClick={handleButtonClick}>
            {isTimerRunning ? "Stop" : "Start"}
        </button>
      </div>
    );
};

export default function DisplayArea() {
    return (
        <>
            <Container />
            <div id={styles.controller}>
                <div>
                    <ul>
                        <li>-1</li>
                        <li>-5</li>
                        <li>-10</li>
                        <li>-20</li>
                    </ul>
                </div>
                <div id={styles.central}>
                    <div id={styles.bpm}>
                        <div>60</div>
                        <div>bpm</div>
                    </div>
                    <div id={styles.custom}>custom</div>
                </div>
                <div>
                    <ul>
                        <li>+1</li>
                        <li>+5</li>
                        <li>+10</li>
                        <li>+20</li>
                    </ul>
                </div>
            </div>
        </>
    )
}