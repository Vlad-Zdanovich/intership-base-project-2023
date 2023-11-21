import React from 'react'
import { setLoginStatus } from '@features/login'
import { AuthNavigationParamsList } from '@processes/navigation/auth-navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback } from 'react'
import { Alert } from 'react-native'

import { AuthSuccsessScreen } from '../../ui'

type Props = NativeStackScreenProps<
  AuthNavigationParamsList,
  'AuthSuccsessScreen'
>

export const AuthSuccessConnector = ({ navigation, route }: Props) => {
  const { isSuccess, accessToken, refreshToken } = route.params

  const onCloseButtonClick = useCallback(() => {
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
  }, [navigation])

  const onButtonClick = useCallback(() => {
    if (isSuccess) {
      setLoginStatus({
        isLogin: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
      })
    } else {
      navigation.goBack()
    }
  }, [accessToken, isSuccess, navigation, refreshToken])

  return (
    <AuthSuccsessScreen
      isSucceeded={isSuccess}
      onCloseButtonClick={onCloseButtonClick}
      onButtonClick={onButtonClick}
    />
  )
}
