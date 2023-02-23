import { useTranslation } from 'react-i18next'
import 'App/i18n'
import { type FC } from 'react'

export const SwitcherLang: FC = () => {
  const { i18n } = useTranslation()
  const handlerClick = (): void => {
    i18n.changeLanguage('ru')
  }
  return <div onClick={handlerClick}>SwitcherLang!</div>
}
