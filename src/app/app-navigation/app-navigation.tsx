import React from 'react'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { MainScreen } from 'pages/MainScreen/pages'
import { ATMsScreen } from 'pages/ATMs/pages'
import { ProfileScreen } from 'pages/Profile/pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabsNavigationParamsList } from './types'
import {
  IconMainProduct,
  IconPayment,
  IconCamera,
  IconBank,
} from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'
import { PaymentsScreenConnector } from '@features/payments-connector'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 116px;
  padding-left: 16px;
  padding-bottom: 8px;
`

const Tabs = createBottomTabNavigator<TabsNavigationParamsList>()

export const AppNavigation = () => {
  const theme = useTheme()

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.palette.background.primary,
        },
        tabBarActiveTintColor: theme.palette.accent.secondary,
        header: ({ options }) => {
          return (
            <Wrapper>
              <Typography align="left" variant="largeTitle34">
                {options.title}
              </Typography>
            </Wrapper>
          )
        },
      }}
    >
      <Tabs.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => {
            return <IconMainProduct color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="PaymentsScreenConnector"
        component={PaymentsScreenConnector}
        options={{
          title: 'Платежы',
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <IconPayment color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="ATMsScreen"
        component={ATMsScreen}
        options={{
          title: 'Банкоматы',
          tabBarIcon: ({ color }) => {
            return <IconBank color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color }) => {
            return <IconCamera color={color} />
          },
        }}
      />
    </Tabs.Navigator>
  )
}
