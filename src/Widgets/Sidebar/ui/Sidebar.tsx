import { type FC } from 'react'
import { SwitcherLang } from 'Widgets/SwitcherLang'
import style from './Sidebar.module.scss'

export const Sidebar: FC = () => {
  return (
    <div className={style.sidebar}>
      <SwitcherLang />
    </div>
  )
}
