import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '../ui/molecules/types'
import { PaymentsScreen } from '../ui/atoms/PaymentsScreen'
import { ServicesScreen } from '@flows/ServicesScreen'

const Stack = createNativeStackNavigator<PaymentsNavigationParamsList>()

export const PaymentsScreenConnector = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={PaymentsScreen}
        name="PaymentsScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={ServicesScreen} name="ServicesScreen" />
    </Stack.Navigator>
  )
}
