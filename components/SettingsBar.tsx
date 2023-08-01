import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import styles from './SettingsBar.module.css';

const allItems = ['']

function SingleOption({
  content,
  isSelected=false,
  onClick,
}: {
  content: string;
  isSelected?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${styles.select} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      id={content}
    >
      {content}
    </div>
  );
}

function GroupOptions({
  id,
  values,
  separator = true,
  multipleSelect = false,
  onClick,
}:{
  id: string;
  values:string[];
  separator?:boolean;
  multipleSelect?:boolean;
  onClick?:() => void;
}) {

  const [selectedItems, setSelectedItems] = useState([]);
  // Function to handle item selection
  const handleItemSelect = (item:string) => {
    if (!multipleSelect && values.length > 1){
	    setSelectedItems([item]);
    }
    else if (!multipleSelect && values.length === 1) {
      // If multipleSelect is false and values prop has only one element, behave like an on-off switch
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.includes(item) ? []: [item]
      );
    } else {
      // Otherwise, toggle the item's selection when multipleSelect is true or values prop has more than one element
      setSelectedItems((prevSelectedItems) => 
      prevSelectedItems.includes(item) ? prevSelectedItems.filter((selectedItem) => selectedItem !== item) : [...prevSelectedItems, item]
      );
    }
  };

  return (
    <>
      <div className={styles.options} id={id}>
        {values.map((value:string) => (
          <SingleOption
            key={value}
            content={value}
            isSelected={selectedItems.includes(value)} // Check if the item is in the selectedItems array
            onClick={() => handleItemSelect(value)} // Pass the function to handle item selection
          />
        ))}
      </div>
      {separator && <Separator />}
    </>
  );
}

function Separator() {
  return <div className={styles.separator}></div>;
}

function FreqControl(){
  const [bpmValue, setBPMValue] = useState('60')
  const [prevBPMValue, setPrevBPMValue] = useState ('')

  const activateButton = (value:string, sign:string) =>{
    if(sign == '-'){
      if(parseInt(bpmValue) - parseInt(value) >= 0){
        setBPMValue(`${parseInt(bpmValue) - parseInt(value)}`)
      }
      else{
        setBPMValue('0')
      }
    }
    if (sign == '+'){
      setBPMValue(`${parseInt(bpmValue) + parseInt(value)}`)
    }
  }

  const handleChange = (event) => {
    let inputValue = event.target.value
    const maxArraySize = 3;
    const numbersArray = inputValue
      .slice(-maxArraySize) // Take the last 3 characters from the input
      .padStart(maxArraySize, '') // Pad the string to the left with '' if less than 3 characters
      .split('') // Convert the string to an array of characters
       
      console.log(numbersArray)
    setBPMValue(numbersArray.join('')); // Convert the array back to a string to be rendered on screen
  };
  

  const valuesUp = ['10', '20']
  const valuesDown = ['20', '10']
  return(
    <>
    <div id={styles.bpm}>
      <div id={styles.buttons}>
        {valuesDown.map((value:string) => (<SingleOption key = {value} content={`-${value}`} onClick={() => activateButton(value, '-')} />))}

        <input type="number" inputMode="numeric" id={styles.input} value={bpmValue} min={0} onChange={handleChange}/>
        {/*<div id={styles.numberInput}>{bpmValue}<div>bpm</div></div>*/}

        {valuesUp.map((value:string) => (<SingleOption key = {value} content={`+${value}`} onClick={() => activateButton(value, '+')} />))}
      </div>
    </div>
    <Separator />
    </>
  )
}

export default function SettingsBar() {

  const renderIntruments = () =>{
    console.log('Renderizar barra de instrumentos')
  }

  return (
    <div className={styles.settings}>
      <div className={styles.rowSettings}>
        <GroupOptions id="playMode" values={["timer", "zen"]} />
        <GroupOptions id="displayMode" values={["notes", "chords"]} />
        <GroupOptions id="whatToDisplay" values={["partiture", "name", "symbol"]} multipleSelect={true} />
        <GroupOptions id="instrumentSettings" values={["instruments"]} separator={false} onClick={renderIntruments}/>
      </div>
    </div>
  );
}