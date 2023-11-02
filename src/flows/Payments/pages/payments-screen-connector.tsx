import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '../ui/molecules/types'
import { PaymentsScreen } from '../ui/atoms/PaymentsScreen'
import { ServicesScreen } from '@flows/ServicesScreen'
import { useTheme } from '@shared/hooks'
import { IconBack } from '@shared/ui/icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator<PaymentsNavigationParamsList>()

export const PaymentsScreenConnector = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.background.primary,
        },
        headerTintColor: theme.palette.accent.tertiary,
      }}
    >
      <Stack.Screen component={PaymentsScreen} name="PaymentsScreen" />
      <Stack.Screen component={ServicesScreen} name="ServicesScreen" />
    </Stack.Navigator>
  )
}
