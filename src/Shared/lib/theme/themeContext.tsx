import { createContext } from "react";

export enum ETheme {
  "light" = "light",
  "dark" = "dark",
}

export const ThemeContext = createContext(ETheme.dark);
