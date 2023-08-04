import React, { useState, useEffect } from 'react';
import styles from './SettingsBar.module.css';
//icons
import SeparatorIcon from '../public/SeparatorQuarterNotePauseIcon.svg'
import TimerIcon from '../public/TimerIcon.svg';
import ZenIcon from '../public/ZenIcon.svg'
import NoteIcon from '../public/NotesMusic-NotesIcon.svg';
import ChordIcon from '../public/ChordsIcon.svg';
import PartitureIcon from '../public/PartitureIcon.svg';
import NameIcon from '../public/NameIcon';
import SymbolIcon from '../public/SymbolIcon';
import GuitarInstrumentIcon from '../public/GuitarInstrumentIcon.svg';

let allSelectedItems:string[] = []  // Lift the state of allItems to the parent component

function SingleOption({
  content,
  isSelected=false,
  onClick,
  icon,
}: {
  content: string;
  isSelected?: boolean;
  onClick: () => void;
  icon?:React.ReactNode;
}) {
  return (
    <button
      className={`${styles.select} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      id={content}
    >
      {icon} {content}
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
  icons,
}:{
  id: string;
  values:string[];
  separator?:boolean;
  multipleSelect?:boolean;
  defaultSelectedItems?:string[]
  onClick?:() => void;
  icons?:React.ReactNode[];
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
        {values.map((value:string, index:number) => (
          <SingleOption
            key={value}
            content={value}
            isSelected={selectedItems.includes(value)} // Check if the item is in the selectedItems array
            onClick={() => handleClick(value)} // Pass the function to handle item selection
            icon={icons? icons[index]: null}
          />
        ))}
      </div>
      {separator && <Separator />}
    </>
  );
}

function Separator() {
  return <SeparatorIcon className={styles.separatorIcon} />;
}

export default function SettingsBar() {

  const renderIntruments = () =>{
    console.log('Renderizar barra de instrumentos')
    //Agora é desenvolver essa função agui
  }

  return (
    <div className={styles.settings}>
      <div className={styles.rowSettings}>
        
        <GroupOptions
          id="playMode"
          values={["timer", "zen"]}
          defaultSelectedItems={['zen']}
          icons={[
            <TimerIcon className={styles.icon}/>,
            <ZenIcon className={styles.icon}/>
          ]}
        />

        <GroupOptions
          id="displayMode"
          values={["notes", "chords"]}
          defaultSelectedItems={['notes']}
          icons = {[
            <NoteIcon className={styles.icon}/>,
            <ChordIcon className={styles.icon}/>
          ]}
        />

        <GroupOptions
          id="whatToDisplay"
          values={["partiture", "name", "symbol"]}
          defaultSelectedItems={['symbol']}
          multipleSelect={true}
          icons={[
            <PartitureIcon className={styles.icon} />,
            <NameIcon className={styles.icons} />,
            <SymbolIcon className={styles.icons} />
          ]}
        />

        <GroupOptions
          id="instrumentSettings"
          values={["instruments"]}
          separator={false}
          onClick={renderIntruments}
          icons={[
            <GuitarInstrumentIcon className={styles.icon}/>
          ]}
        />

      </div>
    </div>
  );
}

export {allSelectedItems}