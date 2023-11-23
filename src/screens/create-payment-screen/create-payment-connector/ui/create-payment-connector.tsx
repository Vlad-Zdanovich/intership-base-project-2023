import React, { useCallback, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CreatePaymentScreen } from '@screens/create-payment-screen/ui'
import { usePaymentOperator, useUpdateHistory } from '@features/create-payment'
import { PaymentsNavigationParamsList } from '@screens/payments-screen'
import { PaymentOperationStatus } from '@shared/api/'
import { showSnack } from '@entities/snack-connector'

type Props = NativeStackScreenProps<
  PaymentsNavigationParamsList,
  'CreatePaymentScreen'
>

export const CreatePaymentConnector = ({ navigation, route }: Props) => {
  const { serviceId, serviceIcon } = route.params
  const { data: paymentOperator, isLoading } = usePaymentOperator(
    serviceId,
    'PAYMENT_OPERATION_KEY',
  )
  const { mutate: updateHistory } = useUpdateHistory()
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(0)

  const onShowPaymentStatus = useCallback(
    (amount: number, status: PaymentOperationStatus) => {
      navigation.navigate('PaymentStatus', {
        amount: amount,
        isSucceeded: status.success,
      })
    },
    [navigation],
  )

  const onSubmitButtonTapped = useCallback(() => {
    if (isLoading) return

    updateHistory(
      {
        card_id: 12345,
        service_id: serviceId,
        size: amount,
        size_cashback: paymentOperator?.cashback_percentage,
        period_from: '',
      },
      {
        onSuccess: (data) => {
          onShowPaymentStatus(amount, data)
        },
        onError: () => {
          showSnack({
            type: 'error',
            message: 'Кто-то что-то сломал',
            duration: 3000,
          })
        },
      },
    )
  }, [
    amount,
    isLoading,
    onShowPaymentStatus,
    paymentOperator?.cashback_percentage,
    serviceId,
    updateHistory,
  ])

  return (
    <CreatePaymentScreen
      icon={serviceIcon}
      phone={phone}
      amount={amount}
      setPhone={setPhone}
      setAmount={setAmount}
      onSubmitButtonTapped={onSubmitButtonTapped}
    />
  )
}
