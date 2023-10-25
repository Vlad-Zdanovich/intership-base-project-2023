import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SomeFlowPageConnector } from '@flows/some-flow-name'
import { styled } from '@ui/theme'
import { Typography } from '@ui/atoms'
import { useTheme } from '@shared/hooks'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
  padding: 16px;
`

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.background.primary,
        },
        headerTintColor: theme.palette.text.primary,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="home" component={SomeFlowPageConnector} />
      <Stack.Screen name="profile">
        {(props) => (
          <Wrapper {...props}>
            <Typography variant="largeTitle">Profile page!</Typography>
          </Wrapper>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
