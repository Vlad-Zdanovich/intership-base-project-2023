import { PaymentType, Service } from "@shared/atoms/payment-type"

export type PaymentsNavigationParamsList = {
    PaymentsScreen: undefined
    ServicesScreen: PaymentType
    CreatePaymentScreen: Service
}