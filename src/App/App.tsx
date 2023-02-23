import './style/index.scss'
import { useTheme } from 'Shared/lib/theme/useTheme'
import { AppRouter } from './Providers/Router'
import { Navbar, Sidebar } from 'Widgets'
import './i18n'
import { type FC, Suspense } from 'react'

export const App: FC = () => {
  const { changeTheme, theme } = useTheme()
  const handlerClick = (): void => {
    changeTheme()
  }
  return (
    <div className={`app ${theme as string}`}>
      <Suspense fallback="laa">
        <Navbar />
        <button onClick={handlerClick}>theme</button>
        <AppRouter />
        <Sidebar />
      </Suspense>
    </div>
  )
}
