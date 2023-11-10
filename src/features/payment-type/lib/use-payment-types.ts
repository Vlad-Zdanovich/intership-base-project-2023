import { PAYMENTS_CATEGORIES_PATH, defaultErrorMessage } from "@shared/consts"
import axios from "axios"
import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import { $paymentsStore, fetchPaymentsFx } from "./store"

export const usePaymentTypes = () => {
    const paymentTypes = useStore($paymentsStore)
    const isLoading = useStore(fetchPaymentsFx.pending)

    useEffect(() => {
        fetchPaymentsFx()
    }, []) 

    return {paymentTypes, isLoading}
}