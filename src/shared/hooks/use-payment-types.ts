import { PaymentType, PaymentTypeResponse } from "@shared/atoms/payment-type"
import { PAYMENTS_CATEGORIES_PATH, defaultErrorMessage } from "@shared/consts"
import axios from "axios"
import { useEffect, useState } from "react"

export const usePaymentTypes = () => {
    const [paymentTypes, setPaymentTypes] = useState<PaymentType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        axios.get<PaymentTypeResponse>(PAYMENTS_CATEGORIES_PATH).then((response) => {
            setIsLoading(false)
            setPaymentTypes(response.data.category) 
        }).catch((error) => {
            setIsLoading(false)
            if(axios.isAxiosError(error)) {
                console.log('error message: ', error.message)
                setError(error.message)
            } else {
                setError(defaultErrorMessage)
            }
        })
    }, [])

    return {paymentTypes, isLoading, error}
}