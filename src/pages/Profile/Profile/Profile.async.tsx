import { lazy } from 'react'

export const AsyncProfile = lazy(async () => await import('./Profile'))
