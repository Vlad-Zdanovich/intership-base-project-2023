import React, { useCallback } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PaymentsNavigationParamsList } from '@screens/payments-screen'
import { PaymentStatus } from '@screens/payment-status/ui'

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'PaymentStatus'
>

export const PaymentsStatusConnector = ({ navigation, route }: Props) => {
  const { amount, isSucceeded } = route.params

  const onDoneButtonClick = useCallback(() => {
    navigation.popToTop()
  }, [navigation])

  return (
    <PaymentStatus
      amount={amount}
      isSucceeded={isSucceeded}
      onDoneButtonClick={onDoneButtonClick}
    />
  )
}
