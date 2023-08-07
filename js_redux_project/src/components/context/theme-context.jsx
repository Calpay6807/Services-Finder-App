import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  /*
    iki tane soru işaretinin anlamı 
    eğer selectedtheme varsa selectedThemeyi al yoksa lightı al 
    diyoruz
    iki defa selectedTheme yazmakı yerine iki tane soru işaretini yazarak
    kodumuzu kisaltıyoruz
    */
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [theme, setTheme] = useState(selectedTheme ?? "light");
  localStorage.setItem("selectedTheme", theme);
  const htmlTag = document.getElementsByTagName("html")[0];
  htmlTag.setAttribute("data-bs-theme", theme);
  const contextValue = {
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
