import { useQuery } from "react-query"
import { getPaymentOperator } from "@shared/api/"
import { PaymentOperatorResponse } from "@shared/api/"
import { showSnack } from "@entities/snack-connector"

export const usePaymentOperator = (service_id: string, queryKey: string) => {
    const query = useQuery<any, any, PaymentOperatorResponse>({
        queryKey: [queryKey],
        queryFn: () => getPaymentOperator(service_id),
        onError: () => {
          showSnack({
            type: 'error',
            message: query.error.message,
            duration: 3000,
          })
        }
      })

    return query
}