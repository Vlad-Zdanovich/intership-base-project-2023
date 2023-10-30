import React from 'react'
import { ThemeContext } from 'styled-components/native'
import { Theme } from '@shared/ui/theme'

export const useTheme = () => {
  const theme: Theme = React.useContext(ThemeContext)
  return theme
}
