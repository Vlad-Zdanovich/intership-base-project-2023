import { PAYMENTS_CATEGORIES_PATH, defaultErrorMessage } from "@shared/consts"
import axios from "axios"
import { useStore } from "effector-react"
import { useEffect, useState } from "react"
import { $paymentsStore, fetchPaymentsFx, $lastRefreshDate } from "./store"

const MS_IN_DAY = 24 * 60 * 60 * 1000

export const usePaymentTypes = () => {
    const paymentTypes = useStore($paymentsStore)
    const isLoading = useStore(fetchPaymentsFx.pending)
    const lastRefreshDate = useStore($lastRefreshDate)


    useEffect(() => {
    if (Date.now() - lastRefreshDate >= MS_IN_DAY) {
        fetchPaymentsFx()
    }   
    }, []) 

    return {paymentTypes, isLoading}
}