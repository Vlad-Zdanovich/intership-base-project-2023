import { PAYMENTS_CATEGORIES_PATH } from "@shared/consts"

import { requestApi } from "./lib"
import { PaymentTypeResponse } from "./model"

export const getPaymentsType = async () => {
    const result = await requestApi.get<PaymentTypeResponse>(PAYMENTS_CATEGORIES_PATH)
    return result.data.category
}