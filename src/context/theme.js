'use client';
import { createContext, useContext, useState } from "react";
const Theme = createContext({})
export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');

  return (
      <Theme.Provider value={{ theme, setTheme }}>
        {children}
      </Theme.Provider>
  )
};
export const useTheme = () => useContext(Theme);





