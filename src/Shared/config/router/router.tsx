import { Intro } from 'pages/Intro'
import { Profile } from 'pages/Profile'
import { type RouteProps } from 'react-router-dom'

export const router = function (): RouteProps[] {
  return [
    { path: '/', element: <Intro /> },
    { path: '/profile', element: <Profile /> }
  ]
}
