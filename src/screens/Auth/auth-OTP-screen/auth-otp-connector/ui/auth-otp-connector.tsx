import { TKeyboardButton } from '@entities/keyboard'
import { AuthNavigationParamsList } from '@processes/navigation/auth-navigation/model/auth-navigation-params-list'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useState } from 'react'
import { AuthOTPScreen } from '../../ui'

type Props = NativeStackScreenProps<AuthNavigationParamsList, 'AuthOTPScreen'>

export const AuthOTPConnector = ({ navigation, route }: Props) => {
  const [otpCode, setOTPCode] = useState('')

  const onKeyPress = useCallback(
    (key: TKeyboardButton) => {
      switch (key?.type) {
        case 'default':
          setOTPCode(otpCode + key.value)
          break
        case 'delete':
          setOTPCode(otpCode.slice(0, -1))
          break
        case 'cancel':
          break
      }
    },
    [otpCode, setOTPCode],
  )

  return <AuthOTPScreen otpCode={otpCode} onKeyPress={onKeyPress} />
}
