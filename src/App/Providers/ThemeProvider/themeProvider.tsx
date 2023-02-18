import { FC } from "react";
import { ETheme, ThemeContext } from "../../../Shared/lib/theme/themeContext";

export const ThemeProvider: FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={ETheme.dark}>
      {children}
    </ThemeContext.Provider>
  );
};
