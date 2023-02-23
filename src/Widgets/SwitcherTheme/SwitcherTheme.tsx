import { Button } from 'Shared/ui/Button/Button'
import Dark from 'assets/dark.svg'
import { useTheme } from 'Shared/lib/theme'
import { type FC } from 'react'

export const SwitcherTheme: FC = () => {
  const { changeTheme } = useTheme()
  const handlerSwitchTheme = (): void => {
    changeTheme()
  }
  return (
    <Button theme="empty">
      <Dark onClick={handlerSwitchTheme} />
    </Button>
  )
}
