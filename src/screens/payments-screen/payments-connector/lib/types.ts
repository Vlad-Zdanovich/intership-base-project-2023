type ServicesScreenProps = {
    title: string,
    paymentsId: string
}

type CreatePaymentScreenProps = {
    title: string,
    serviceId: string
    serviceIcon: string
}

type PaymentStatusScreenProps = {
    amount: number,
    isSucceeded: boolean
  }

export type PaymentsNavigationParamsList = {
    PaymentsScreen: undefined
    ServicesScreen: ServicesScreenProps
    CreatePaymentScreen: CreatePaymentScreenProps
    PaymentStatus: PaymentStatusScreenProps
}