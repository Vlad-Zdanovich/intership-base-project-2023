import { $guestTokenStore } from '@features/confirm-auth'
import { useLogin } from '@features/login'
import { showSnack } from '@entities/snack-connector'
import { AuthNavigationParamsList } from '@processes/navigation/auth-navigation/model/auth-navigation-params-list'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useStore } from 'effector-react'
import { useCallback } from 'react'
import { Alert } from 'react-native'
import { AuthPasswordInputScreen } from '../../ui'
import { usePassword } from './hooks'

type Props = NativeStackScreenProps<
  AuthNavigationParamsList,
  'AuthPasswordInputScreen'
>

export const AuthPasswordInputConnector = ({ navigation }: Props) => {
  const { password, isLengthValid, isCharactersValid, setPassword } =
    usePassword('')
  const guestToken = useStore($guestTokenStore)
  const { mutate: postLogin } = useLogin()

  const onContinueTapped = useCallback(() => {
    if (isLengthValid && isCharactersValid) {
      postLogin(
        {
          guestToken: guestToken,
          password: password,
        },
        {
          onSuccess: (data) => {
            navigation.navigate('AuthSuccsessScreen', {
              isSuccess: true,
              accessToken: data.accessToken,
            })
          },
          onError: () => {
            navigation.navigate('AuthSuccsessScreen', {
              isSuccess: false,
            })
          },
        },
      )
    } else {
      showSnack({
        type: 'error',
        message: 'Пароль введён неверно',
        duration: 3000,
      })
    }
  }, [guestToken, password])

  const onCloseTapped = useCallback(() => {
    Alert.alert('Вы точно хотите выйти?', '', [
      {
        text: 'Отмена',
      },
      {
        text: 'Выход',
        style: 'cancel',
        onPress: () => {
          navigation.popToTop()
        },
      },
    ])
  }, [])

  return (
    <AuthPasswordInputScreen
      password={password}
      setPassword={setPassword}
      onContinueTapped={onContinueTapped}
      onCloseTapped={onCloseTapped}
    />
  )
}
