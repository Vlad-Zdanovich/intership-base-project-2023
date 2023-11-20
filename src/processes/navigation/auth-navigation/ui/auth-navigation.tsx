import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  AuthSuccessConnector,
  AuthOTPConnector,
  AuthPasswordInputConnector,
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
        component={AuthPasswordInputConnector}
        name="AuthPasswordInputScreen"
      />
      <Stack.Screen
        component={AuthSuccessConnector}
        name="AuthSuccsessScreen"
      />
    </Stack.Navigator>
  )
}
