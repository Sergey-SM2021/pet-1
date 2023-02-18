import { useState } from "react";
import { ETheme } from "./themeContext";

export const useTheme = () => {
  const [theme, setTheme] = useState<ETheme>(ETheme.dark);
  const handlerSetTheme = () => {
    setTheme(theme === ETheme.dark ? ETheme.light : ETheme.dark);
  };
  return {
    theme,
    changeTheme: handlerSetTheme,
  };
};
