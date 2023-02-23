import { type PropsWithChildren, type FC } from 'react'
import { ETheme, ThemeContext } from '../../../Shared/lib/theme/themeContext'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeContext.Provider value={ETheme.dark}>
      {children}
    </ThemeContext.Provider>
  )
}
