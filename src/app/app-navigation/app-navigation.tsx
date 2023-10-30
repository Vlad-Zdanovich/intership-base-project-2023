import React from 'react'
import { styled } from '@shared/ui/theme'
import { useTheme } from '@shared/hooks'
import { MainScreen } from '@flows/MainScreen/pages'
import { PaymentsScreen } from '@flows/Payments/pages'
import { ATMsScreen } from '@flows/ATMs/pages'
import { ProfileScreen } from '@flows/Profile/pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabsNavigationParamsList } from './types'
import {
  IconMainProduct,
  IconPayment,
  IconCamera,
  IconBank,
} from '@shared/ui/icons'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding-top: 10px;
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
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Главная',
          tabBarActiveTintColor: theme.palette.accent.secondary,
          tabBarIcon: ({ color }) => {
            return <IconMainProduct color={color} />
          },
        }}
      />
      <Tabs.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{
          title: 'Платежи',
          tabBarActiveTintColor: theme.palette.accent.secondary,
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
          tabBarActiveTintColor: theme.palette.accent.secondary,
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
          tabBarActiveTintColor: theme.palette.accent.secondary,
          tabBarIcon: ({ color }) => {
            return <IconCamera color={color} />
          },
        }}
      />
    </Tabs.Navigator>
  )
}
