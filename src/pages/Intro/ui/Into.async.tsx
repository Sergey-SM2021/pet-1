import { lazy } from 'react'

export const AsyncIntro = lazy(async () => await import('./Intro'))
