import './styles/global.css'

import React from 'react'
import { ThemeProvider } from 'styled-components'

const defaultTheme = {}

interface DSProviderProps {
  children: React.ReactNode
}

export const DSProvider: React.FC<DSProviderProps> = ({
  children
}: DSProviderProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>{children}</>
    </ThemeProvider>
  )
}

export * from './components/button'
export * from './components/card'
export * from './components/form-row'
export * from './components/form'
export * from './components/icon'
export * from './components/lp-navbar'
export * from './components/navbar'
export * from './components/table'
export * from './components/text-input'
export * from './components/text'
export * from './components/toast'
