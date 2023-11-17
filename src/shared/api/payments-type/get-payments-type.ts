import { PAYMENTS_CATEGORIES_PATH } from "@shared/consts"
import axios from "axios"
import { PaymentTypeResponse } from "./model"

export const getPaymentsType = async () => {
    const result = await axios.get<PaymentTypeResponse>(PAYMENTS_CATEGORIES_PATH)
    return result.data
}