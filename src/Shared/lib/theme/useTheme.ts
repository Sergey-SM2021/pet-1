import { useState } from 'react'
import { ETheme } from './themeContext'

export const useTheme = (): any => {
  const [theme, setTheme] = useState<ETheme>(ETheme.dark)
  const handlerSetTheme = (): void => {
    setTheme(theme === ETheme.dark ? ETheme.light : ETheme.dark)
  }
  return {
    theme,
    changeTheme: handlerSetTheme
  }
}
