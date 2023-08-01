import React, { useState } from 'react';
import styles from './SettingsBar.module.css';

const BPM_VALUES = ["custom", "120", "60", "30"];
const BPS_VALUES = ["custom", "2", "1", "0.5"];
const S_VALUES = ["custom", "0.5", "1", "2"];
const allSelectedItems = ['']

function SettingsSelect({
  content,
  isSelected,
  onClick,
}: {
  content: string;
  isSelected: boolean;
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

function SettingsOptions({
  id,
  values,
  separator = true,
  multipleSelect = false,
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
          <SettingsSelect
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

export default function SettingsBar() {
  return (
    <div className={styles.settings}>
      <div className={styles.rowSettings}>
        <SettingsOptions id="muOptions" values={BPM_VALUES} />
        <SettingsOptions id="MU" values={["bpm", "bps", "s"]} />
        <SettingsOptions id="playMode" values={["timer", "zen"]} />
        <SettingsOptions id="displayMode" values={["notes", "chords"]} />
        <SettingsOptions id="whatToDisplay" values={["partiture", "name", "symbol"]} multipleSelect={true} />
        <SettingsOptions id="instrumentSettings" values={["instruments"]} separator={false} />
      </div>
    </div>
  );
}