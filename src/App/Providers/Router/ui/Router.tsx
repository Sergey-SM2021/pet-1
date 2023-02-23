import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from 'Shared/config/router/router'

export const AppRouter: FC = () => {
  return (
      <Routes>
        {router().map((el, i) => (
          <Route key={i} {...el} />
        ))}
      </Routes>
  )
}
