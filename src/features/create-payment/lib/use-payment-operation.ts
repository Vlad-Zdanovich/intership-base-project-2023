import { useQuery } from "react-query"
import { getPaymentOperator } from "@shared/api/"
import { PaymentOperatorResponse } from "@shared/api/"
import { useEffect } from "react"
import { showSnack } from "@features/snack-connector"

const PAYMENT_OPERATION_KEY = 'paymentOperation'

export const usePaymentOperator = (service_id: string) => {
    const {
        data,
        error,
        isError,
        isLoading
      } = useQuery<any, any, PaymentOperatorResponse>({
        queryKey: [PAYMENT_OPERATION_KEY],
        queryFn: () => getPaymentOperator(service_id)
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

    return {paymentOperator: data, isLoading}
}