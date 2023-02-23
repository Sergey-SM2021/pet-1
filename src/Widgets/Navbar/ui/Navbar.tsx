import { useTranslation } from 'react-i18next'
import { AppLink } from 'Shared'
import { SwitcherTheme } from 'Widgets/SwitcherTheme'
import style from './Navbar.module.scss'
import 'App/i18n'
import { type FC } from 'react'

export const Navbar: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.navbar}>
      <AppLink theme="secondary" to={'/profile'}>
        {t('link')}
      </AppLink>
      <SwitcherTheme />
    </div>
  )
}
