import { PAYMENT_OPERATOR_PATH } from "@shared/consts"

import { requestApi } from "./lib"
import { PaymentOperatorResponse } from "./model"

export const getPaymentOperator = async (service_id: string) => {
    const result = await requestApi.get<PaymentOperatorResponse>(PAYMENT_OPERATOR_PATH(service_id))
    return result.data
}