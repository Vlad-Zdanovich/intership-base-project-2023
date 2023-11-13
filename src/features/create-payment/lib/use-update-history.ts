import { postPaymentOperation } from "@shared/api/"
import { useMutation } from "react-query"

export const useUpdateHistory = () => {
    const { mutate } = useMutation({
        mutationFn: postPaymentOperation
    })

    return {
        updateHistory: mutate
    }
}