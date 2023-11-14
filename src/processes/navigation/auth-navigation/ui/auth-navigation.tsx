import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  AuthSuccsessScreen,
  AuthOTPScreen,
  AuthPasswordInputScreen,
  AuthPhoneInputScreen,
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
        component={AuthPhoneInputScreen}
        name="AuthPhoneInputScreen"
      />
      <Stack.Screen component={AuthOTPScreen} name="AuthOTPScreen" />
      <Stack.Screen
        component={AuthPasswordInputScreen}
        name="AuthPasswordInputScreen"
      />
      <Stack.Screen component={AuthSuccsessScreen} name="AutnSuccsessScreen" />
    </Stack.Navigator>
  )
}
