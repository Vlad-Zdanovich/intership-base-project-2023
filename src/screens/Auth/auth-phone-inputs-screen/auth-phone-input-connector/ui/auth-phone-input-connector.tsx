import React from 'react'
import { TKeyboardButton } from '@entities/keyboard'
import { setOTPCodeEvent, setPhoneEvent } from '@features/OTP/model/model'
import { AuthNavigationParamsList } from '@processes/navigation/auth-navigation/model/auth-navigation-params-list'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { OTPCodeResponse } from '@shared/api/otp/model'
import { useState, useCallback } from 'react'

import { AuthPhoneInputScreen } from '../../ui'
import { useValideOTP } from '../lib'

type Props = NativeStackScreenProps<
  AuthNavigationParamsList,
  'AuthPhoneInputScreen'
>

export const AuthPhoneInputConnector = ({ navigation }: Props) => {
  const [phone, setPhone] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const onSuccessSendOTP = useCallback(
    (data: OTPCodeResponse) => {
      setPhoneEvent(phone)
      setOTPCodeEvent(data)
      navigation.navigate('AuthOTPScreen')
    },
    [phone, navigation],
  )

  const { onSend, isLoading } = useValideOTP({
    phone: phone,
    onSuccess: (data) => onSuccessSendOTP(data),
  })

  const onKeyPress = useCallback(
    (keyboardButton: TKeyboardButton) => {
      switch (keyboardButton.type) {
        case 'default':
          if ((phone + keyboardButton.value).length > 10) return
          setPhone(phone + keyboardButton.value)
          break
        case 'delete':
          setPhone(phone.slice(0, -1))
          break
        case 'cancel':
          setIsFocused(false)
          break
      }
    },
    [setPhone, phone],
  )

  return (
    <AuthPhoneInputScreen
      phone={phone}
      isFocused={isFocused}
      isLoading={isLoading}
      setPhone={setPhone}
      setFocus={setIsFocused}
      onKeyPress={onKeyPress}
      onSubmitButtonTapped={onSend}
    />
  )
}
