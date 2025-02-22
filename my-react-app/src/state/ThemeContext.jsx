import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  const toggleTheme = () => { setIsDarkMode((prevState) => !prevState)}

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
