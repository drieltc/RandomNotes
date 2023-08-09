import React, { useState, useEffect } from 'react';
import styles from './SettingsBar.module.css';
import { useSettings } from './SettingsContext';

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

//Menus
import { TimerMenu, NotesMenu, ChordsMenu, InstrumentsMenu } from './Menus';

function SingleOption({
  content,
  isSelected=false,
  onClick,
  icon,
  menu,
}: {
  content: string;
  isSelected?: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  menu?: React.ReactNode;
}) {
  return (
    <>
    <button
      className={`${styles.select} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      id={content}
      >
      {icon} {content}
    </button>
    </>
  );
}

function GroupOptions({
  id,
  values,
  separator = true,
  multipleSelect = false,
  onClick,
  icons,
  menus,
}:{
  id: string;
  values:string[];
  separator?:boolean;
  multipleSelect?:boolean;
  onClick?:() => void;
  icons?:React.ReactNode[];
  menus?:React.ReactNode[];
}) {

  const { selectedOptions, setSelectedOptions } = useSettings();

  // Function to handle item selection
  const handleItemSelect = (item:string) => {
    if (!multipleSelect && values.length > 1) {
      setSelectedOptions({ ...selectedOptions, [id]: [item] });
    } else if (!multipleSelect && values.length === 1) {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [id]: prevSelectedOptions[id]?.includes(item) ? [] : [item],
      }));
    } else {
      if (selectedOptions[id]?.length === 1 && selectedOptions[id]?.includes(item)) {
        return;
      }

      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions, [id]: prevSelectedOptions[id]?.includes(item) ? prevSelectedOptions[id].filter((selectedItem:string) => selectedItem !== item)
        : [...(prevSelectedOptions[id] || []), item],
      }));
    }
  };

  // Create a new function that calls both onClick and handleItemSelect
  const handleClick = (value:string) => {
    if (onClick) {
      onClick(); // Call the onClick function if it exists
    }
    // Always call handleItemSelect to handle item selection
    handleItemSelect(value);
  }; 

  return (
    <>
      <div className={styles.options} id={id}>
        {values.map((value:string, index:number) => (
          <SingleOption
            key={value}
            content={value}
            isSelected={(selectedOptions[id] || []).includes(value)} // Check if the item is in the state array
            onClick={() => handleClick(value)} // Pass the function to handle item selection
            icon={icons? icons[index]: null}
            menu={menus? menus[index]: null}
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
          id='playMode'
          values={['timer', 'zen']}
          icons={[
            <TimerIcon className={styles.icon}/>,
            <ZenIcon className={styles.icon}/>
          ]}
        />

        <GroupOptions
          id='displayMode'
          values={['notes', 'chords']}
          icons = {[
            <NoteIcon className={styles.icon}/>,
            <ChordIcon className={styles.icon}/>
          ]}
        />

        <GroupOptions
          id='whatToDisplay'
          values={['partiture', 'name', 'symbol']}
          multipleSelect={true}
          icons={[
            <PartitureIcon className={styles.icon} />,
            <NameIcon className={styles.icons} />,
            <SymbolIcon className={styles.icons} />
          ]}
        />

        <GroupOptions
          id='instrumentSettings'
          values={['instruments']}
          separator={false}
          onClick={renderIntruments}
          icons={[
            <GuitarInstrumentIcon className={styles.icon}/>
          ]}
        />
      </div>
      <div id={styles.menus}>
          <div id='timerMenu'><TimerMenu visibility={true} /></div>
          <div id='notesMenu'><NotesMenu visibility={false} /></div>
          <div id='chordsMenu'><ChordsMenu visibility={false} /></div>
          <div id='instrumentsMenu'><InstrumentsMenu visibility={false} /></div>
      </div>
    </div>
  );
}