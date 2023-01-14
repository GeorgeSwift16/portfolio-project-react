import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext({ theme: "Default" });

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("Default");
  // const root = document.getElementById("root")
  // const root2 = document.documentElement.style
  // console.log(root);
  // console.log(root2);
  // const handleThemeColorUpdate = (themeName) => {

  //     if (themeName = "Light") {
  //         root.style.setProperty(--theme-primary-color, "pink")
  //         root.style.setProperty(--theme-secondary-color, "green")
  //         root.style.setProperty(--theme-tertiary-color, "blue")
  //     }
  //     return
  // }

  // useEffect(() => {
  // handleThemeColorUpdate(theme)
  // }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
