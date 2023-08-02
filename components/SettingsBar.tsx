import React, { useState, useEffect } from 'react';
import styles from './SettingsBar.module.css';

let allSelectedItems:string[] = []  // Lift the state of allItems to the parent component

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
    <button
      className={`${styles.select} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      id={content}
    >
      {content}
    </button>
  );
}

function GroupOptions({
  id,
  values,
  separator = true,
  multipleSelect = false,
  defaultSelectedItems,
  onClick,
}:{
  id: string;
  values:string[];
  separator?:boolean;
  multipleSelect?:boolean;
  defaultSelectedItems?:string[]
  onClick?:() => void;
}) {

  const [selectedItems, setSelectedItems] = useState(defaultSelectedItems || []);
  // Function to handle item selection
  const handleItemSelect = (item: string) => {
    if (!multipleSelect && values.length > 1) {
      setSelectedItems([item]);
    } else if (!multipleSelect && values.length === 1) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.includes(item) ? [] : [item]
      );
    } else {
      // Check if it is the last selected item and if it's being deselected
      if (selectedItems.length === 1 && selectedItems.includes(item)) {
        return; // Prevent deselecting the last selected item
      }
  
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.includes(item)
          ? prevSelectedItems.filter((selectedItem) => selectedItem !== item)
          : [...prevSelectedItems, item]
      );
    }
  };
  

  // Create a new function that calls both onClick and handleItemSelect
  const handleClick = (value:string) => {
    if (onClick) {
      onClick(); // Call the onClick function if it exists
    }
    // Always call handleItemSelect to handle item selection
    handleItemSelect(value);
  };  useEffect(() => {
    allSelectedItems = selectedItems; // Update the allSelecteedItems variable whenever selectedItems changes
    console.log(allSelectedItems)
    //Ainda não tá funcionando da maneira que eu quero. Provavelmente eu crie um useState para cada menu e coloque esses estados como as dependências desse useEffect aqui, mas n sei ainda
  }, [selectedItems]);

  return (
    <>
      <div className={styles.options} id={id}>
        {values.map((value:string) => (
          <SingleOption
            key={value}
            content={value}
            isSelected={selectedItems.includes(value)} // Check if the item is in the selectedItems array
            onClick={() => handleClick(value)} // Pass the function to handle item selection
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

  const renderIntruments = () =>{
    console.log('Renderizar barra de instrumentos')
    //Agora é desenvolver essa função agui
  }

  return (
    <div className={styles.settings}>
      <div className={styles.rowSettings}>
        <GroupOptions id="playMode" values={["timer", "zen"]} defaultSelectedItems={['zen']}/>
        <GroupOptions id="displayMode" values={["notes", "chords"]} defaultSelectedItems={['notes']}/>
        <GroupOptions id="whatToDisplay" values={["partiture", "name", "symbol"]} defaultSelectedItems={['symbol']} multipleSelect={true} />
        <GroupOptions id="instrumentSettings" values={["instruments"]} separator={false} onClick={renderIntruments}/>
      </div>
    </div>
  );
}

export {allSelectedItems}