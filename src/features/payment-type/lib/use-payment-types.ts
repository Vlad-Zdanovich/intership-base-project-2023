import { showSnack } from "@features/snack-connector"
import { getPaymentsType, PaymentType } from "@shared/api"
import { useEffect } from "react"
import { useQuery } from "react-query"

const PAYMENT_CATEGORIES_KEY = "paymentCategories"
const MS_IN_DAY = 24 * 60 * 60 * 1000

export const usePaymentTypes = () => {
    const {
        data,
        error,
        isError,
        isLoading
      } = useQuery<any, any, PaymentType[]>({
        queryKey: [PAYMENT_CATEGORIES_KEY],
        queryFn: () => getPaymentsType(),
        staleTime: MS_IN_DAY
      })


    useEffect(() => {
    if (error || isError) {
        showSnack({
          type: 'error',
          message: error.message,
          duration: 3000,
        })
    }   
    }, [error, isError]) 

    return {paymentTypes: data, isLoading}
}