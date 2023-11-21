import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { usePaymentTypes } from '@features/payment-type/model/use-payment-types'
import { PaymentType } from '@shared/api'

import { PaymentsNavigationParamsList } from '..'
import { PaymentsScreen } from '../../ui'

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'PaymentsScreen'
>

export const PaymentsScreenConnector = ({ navigation }: Props) => {
  const { paymentTypes, isLoading } = usePaymentTypes()

  const onPaymentItem = (type: PaymentType) => {
    navigation.navigate('ServicesScreen', {
      title: type.category_name,
      paymentsId: type.category_id,
    })
  }

  return (
    <PaymentsScreen
      paymentTypes={paymentTypes ?? []}
      isLoading={isLoading}
      onPaymentItem={onPaymentItem}
    />
  )
}
