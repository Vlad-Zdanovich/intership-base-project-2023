/* eslint-disable no-use-before-define */
import React from 'react'
import { TKeyboardButton } from '@entities/keyboard'
import { AuthNavigationParamsList } from '@processes/navigation/auth-navigation/model/auth-navigation-params-list'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FullscreenLoader } from '@shared/ui/molecules'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert } from 'react-native'

import { AuthOTPScreen } from '../../ui'
import { TimeFormatter, useOTPHelper, useOTPTimer } from '../model'

const TOTAL_ATTEMPTS_AMOUNT = 5
const TIMER_DURATION = 180

type Props = NativeStackScreenProps<AuthNavigationParamsList, 'AuthOTPScreen'>

export const AuthOTPConnector = ({ navigation }: Props) => {
  const [enteredOTPCode, setEnteredOTPCode] = useState('')
  const {
    checkAuthConfirmed,
    resendOTP,
    attemptAmount,
    isLoading,
    isValid,
    setIsValid,
  } = useOTPHelper({
    onSuccess: onSuccessSendOTP,
    onErrorSendOTP: onErrorSendOTP,
    onSuccessResendOTP: onSuccessResendOTP,
  })
  const { timeLeft, isTimeExpired, resetTimeLeft } = useOTPTimer(TIMER_DURATION)

  const timeButtonText = useMemo(() => {
    return isTimeExpired
      ? 'Выслать код повторно'
      : `Повторить через ${TimeFormatter.formatNumberToMinutes(timeLeft)}`
  }, [isTimeExpired, timeLeft])

  const errorMessage = useMemo(
    () => `Неверный код. Осталось ${TOTAL_ATTEMPTS_AMOUNT - attemptAmount}`,
    [attemptAmount],
  )

  function onSuccessSendOTP() {
    navigation.navigate('AuthPasswordInputScreen')
  }

  function onSuccessResendOTP() {
    resetTimeLeft()
  }

  function onErrorSendOTP(attempt: number) {
    if (attempt == TOTAL_ATTEMPTS_AMOUNT) {
      Alert.alert(
        'Вы ввели неверно код 5 раз',
        'Данная сессия авторизации будет сброшена!',
        [
          {
            text: 'Выход',
            onPress: () => {
              navigation.popToTop()
            },
          },
        ],
      )
    } else {
      setEnteredOTPCode('')
      setTimeout(() => {
        setIsValid(true)
      }, 3000)
    }
  }

  const onKeyPress = useCallback(
    (key: TKeyboardButton) => {
      switch (key?.type) {
        case 'default':
          setEnteredOTPCode(enteredOTPCode + key.value)
          break
        case 'delete':
          setEnteredOTPCode(enteredOTPCode.slice(0, -1))
          break
        case 'timer':
          if (isTimeExpired) {
            resendOTP()
          }
          break
      }
    },
    [enteredOTPCode, isTimeExpired, resendOTP],
  )

  useEffect(() => {
    if (enteredOTPCode.length === 4) checkAuthConfirmed(enteredOTPCode)
  }, [checkAuthConfirmed, enteredOTPCode])

  return isLoading ? (
    <FullscreenLoader />
  ) : (
    <AuthOTPScreen
      otpCode={enteredOTPCode}
      timeButtonText={timeButtonText}
      otpLen={4}
      errorMessage={errorMessage}
      isValid={isValid}
      onKeyPress={onKeyPress}
    />
  )
}
