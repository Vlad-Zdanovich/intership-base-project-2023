import React from 'react'
import {
  IconMainProduct,
  IconPayment,
  IconCamera,
  IconBank,
} from '@shared/ui/icons'
import { Typography } from '@shared/ui/atoms'
import { MainScreen } from '@screens/main-screen'
import { ATMsScreen } from '@screens/ATMs'
import { ProfileScreen } from '@screens/profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { styled } from '@shared/ui/theme'
import { TabsNavigationParamsList } from '@app/app-navigation/types'
import { useTheme } from '@shared/hooks'

import { PaymentsNavigation } from './payments-navigation'

const HeaderWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  justify-content: flex-end;
  align-items: flex-start;
  height: 116px;
  padding-left: 16px;
  padding-bottom: 8px;
`

const Tabs = createBottomTabNavigator<TabsNavigationParamsList>()

export const TabsNavigation = () => {
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
            <HeaderWrapper>
              <Typography align="left" variant="largeTitle34">
                {options.title}
              </Typography>
            </HeaderWrapper>
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
        component={PaymentsNavigation}
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
