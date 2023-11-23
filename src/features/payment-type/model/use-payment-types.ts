import { showSnack } from "@entities/snack-connector"
import { getPaymentsType, PaymentType } from "@shared/api"
import { useQuery } from "react-query"

const PAYMENT_CATEGORIES_KEY = "paymentCategories"
const MS_IN_DAY = 24 * 60 * 60 * 1000

export const usePaymentTypes = () => {
    const {
        data,
        error,
        isLoading
      } = useQuery<any, any, PaymentType[]>({
        queryKey: [PAYMENT_CATEGORIES_KEY],
        queryFn: () => getPaymentsType(),
        staleTime: MS_IN_DAY,
        onError: () => {
          showSnack({
            type: 'error',
            message: error.message,
            duration: 3000,
          })
        }
      })

    return {paymentTypes: data, isLoading}
}