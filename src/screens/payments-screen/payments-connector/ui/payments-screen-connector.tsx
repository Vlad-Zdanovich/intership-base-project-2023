import React, { useEffect, useLayoutEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PaymentsScreen } from '@screens/payments-screen'
import { showSnack } from '@features/snack-connector'
import { PaymentsNavigationParamsList } from '..'
import { usePaymentTypes } from '@features/payment-type/lib/use-payment-types'
import { PaymentType } from '@shared/api'
import { fetchPaymentsFx } from '@features/payment-type/lib'

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'PaymentsScreen'
>

export const PaymentsScreenConnector = ({ navigation, route }: Props) => {
  const { paymentTypes, isLoading } = usePaymentTypes()

  const onPaymentItem = (type: PaymentType) => {
    navigation.navigate('ServicesScreen', type)
  }

  return (
    <PaymentsScreen
      paymentTypes={paymentTypes}
      isLoading={isLoading}
      onPaymentItem={onPaymentItem}
    />
  )
}
