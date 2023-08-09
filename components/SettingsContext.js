import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({
  children, defaultSelectedOptions = {}
}) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultSelectedOptions);

  return (
    <SettingsContext.Provider value={{ selectedOptions, setSelectedOptions }}>
      {children}
    </SettingsContext.Provider>
  );
};