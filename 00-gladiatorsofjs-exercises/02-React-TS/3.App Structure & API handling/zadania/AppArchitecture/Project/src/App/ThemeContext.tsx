import React, { useContext, createContext, useState } from "react";

const ThemeContext = createContext<any>({} as any);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
  const [themeColor, setThemeColor] = useState<any>("light");

  const handleChangeTheme = () => {
    setThemeColor((lastState: any) => (lastState === "light" ? "dark" : "light"));
  };

  const value: any = { themeColor, handleChangeTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};
