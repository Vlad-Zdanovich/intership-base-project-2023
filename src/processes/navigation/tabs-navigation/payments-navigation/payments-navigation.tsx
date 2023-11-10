import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useTheme } from '@shared/hooks'
import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { ServicesScreen } from '@screens/services-screen'
import { CreatePaymentScreen } from '@screens/create-payment-screen'
import {
  PaymentsNavigationParamsList,
  PaymentsScreenConnector,
} from '@screens/payments-screen'

const HeaderWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: flex-end;
  align-items: flex-start;
  height: 116px;
  padding-left: 16px;
  padding-bottom: 8px;
`

const Stack = createNativeStackNavigator<PaymentsNavigationParamsList>()

export const PaymentsNavigation = () => {
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
      <Stack.Screen
        component={PaymentsScreenConnector}
        name="PaymentsScreen"
        options={() => ({
          header: () => (
            <HeaderWrapper>
              <Typography align="left" variant="largeTitle34">
                Платежы
              </Typography>
            </HeaderWrapper>
          ),
        })}
      />
      <Stack.Screen
        component={ServicesScreen}
        name="ServicesScreen"
        options={({ route }) => ({
          title: route.params.category_name,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        component={CreatePaymentScreen}
        name="CreatePaymentScreen"
        options={({ route }) => ({ title: route.params.service_name })}
      />
    </Stack.Navigator>
  )
}
