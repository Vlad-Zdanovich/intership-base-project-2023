import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SomeFlowPageConnector } from '@flows/some-flow-name'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

const Stack = createNativeStackNavigator()

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home">{() => <SomeFlowPageConnector />}</Stack.Screen>
      <Stack.Screen name="profile">
        {(props) => (
          <View style={styles.container} {...props}>
            <Text>Profile page!</Text>
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
