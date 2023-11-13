import { requestApi } from "./lib"
import { PaymentOperationRequest, PaymentOperationStatus } from "./model/payment-operator-type"

export const postPaymentOperation = async (body: PaymentOperationRequest) => {
    const response = await requestApi.post<PaymentOperationStatus>(
        "/core/history",
        body
    )
    return response.data
}