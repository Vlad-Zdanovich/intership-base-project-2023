import React from 'react'
import { View } from 'react-native'
import { Typography } from '@shared/ui/atoms'
import { useTheme } from '@shared/hooks'

export const Card = () => {
  const theme = useTheme()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.palette.background.primary,
      }}
    >
      <Typography variant="largeTitle">Card component!</Typography>
    </View>
  )
}
