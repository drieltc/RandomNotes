import React, { createContext, useContext, useState } from 'react';

const SecondarySettingsContext = createContext();

export const useSecondarySettings = () => useContext(SecondarySettingsContext);

export const SecondarySettingsProvider = ({
  children,
}) => {
  const [secondarySelectedOptions, setSecondarySelectedOptions] = useState({}); // You can initialize this with default values if needed

  return (
    <SecondarySettingsContext.Provider
      value={{
        secondarySelectedOptions,
        setSecondarySelectedOptions,
      }}
    >
      {children}
    </SecondarySettingsContext.Provider>
  );
};
