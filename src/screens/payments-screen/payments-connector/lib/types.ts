import { Service } from "@shared/api"

type ServicesScreenProps = {
    title: string,
    paymentsId: string
}

export type PaymentsNavigationParamsList = {
    PaymentsScreen: undefined
    ServicesScreen: ServicesScreenProps
    CreatePaymentScreen: Service
}