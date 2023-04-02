// @Ali: create a dynamic context for the mobile menu state 
// Currently mobile menu state is updated by a checkbox

import React, { useEffect, createContext, useState } from "react";

const MenuContext = createContext();

const displayMenu = () => {
  // Get theme from local storage or set it "dark" by default
  const theme = (typeof window !== 'undefined')
    ? localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : "dark";
  
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return theme;
  }
};

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(displayMenu);

  function toggleMenu() {
    if (menu === "hidden") {
      setMenu("shown");
    } else {
      setMenu("hidden");
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute('data-theme', theme)
    };

    refreshTheme();
  }, [theme]);

  return (
    <MenuContext.Provider
      value={{
        menu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };