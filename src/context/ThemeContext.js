import { createContext } from "react";

import { useState, useEffect } from "react";
import themeData from "../data/themes/themeData.json";
export const ThemeContext = createContext({ themeName: "Default" });

export const ThemeContextProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("Default");

  const handleThemeColorUpdate = (themeName) => {
    Object.entries(themeData[themeName]).forEach((element) =>
      document.documentElement.style.setProperty(element[0], element[1])
    );
  };

  useEffect(() => {
    handleThemeColorUpdate(themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
