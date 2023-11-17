import { postPaymentOperation } from "@shared/api/"
import { useMutation } from "react-query"

export const useUpdateHistory = () => {
    const mutation = useMutation({
        mutationFn: postPaymentOperation
    })

    return mutation
}