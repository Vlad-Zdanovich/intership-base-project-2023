import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '../ui/molecules/types'
import { useTheme } from '@shared/hooks'
import { Typography } from '@shared/ui/atoms'
import {
  CreatePaymentScreen,
  PaymentsScreen,
  ServicesScreen,
} from 'pages/payments'

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
        headerBackTitleVisible: false,
        headerTitle: ({ children }) => {
          return (
            <Typography
              align="left"
              variant="subtitle"
              style={{ color: theme.palette.text.primary }}
            >
              {children}
            </Typography>
          )
        },
      }}
    >
      <Stack.Screen component={PaymentsScreen} name="PaymentsScreen" />
      <Stack.Screen component={ServicesScreen} name="ServicesScreen" />
      <Stack.Screen
        component={CreatePaymentScreen}
        name="CreatePaymentScreen"
      />
    </Stack.Navigator>
  )
}
