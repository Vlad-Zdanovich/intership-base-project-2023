import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  AuthSuccsessScreen,
  AuthOTPConnector,
  AuthPasswordInputScreen,
  AuthPhoneInputConnector,
} from '@screens/Auth'
import { AuthNavigationParamsList } from '../model/auth-navigation-params-list'

const Stack = createNativeStackNavigator<AuthNavigationParamsList>()

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={AuthPhoneInputConnector}
        name="AuthPhoneInputScreen"
      />
      <Stack.Screen component={AuthOTPConnector} name="AuthOTPScreen" />
      <Stack.Screen
        component={AuthPasswordInputScreen}
        name="AuthPasswordInputScreen"
      />
      <Stack.Screen component={AuthSuccsessScreen} name="AutnSuccsessScreen" />
    </Stack.Navigator>
  )
}
