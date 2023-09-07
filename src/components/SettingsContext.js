import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({
  children, defaultSelectedOptions = {}
}) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);

  return (
    <SettingsContext.Provider
      value={{
        selectedOptions, setSelectedOptions
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

/*Options = {
	bpm: bpmValue,
	instrument: {
		name: instrumentName,
		frets: true XOR false,
		tuning: true XOR false,
	},
	notes: {
		visual: sharp XOR flat,
		excludedNotes: []
	},
	chords: 'dont know yet',
	timer: timerValue,
} */