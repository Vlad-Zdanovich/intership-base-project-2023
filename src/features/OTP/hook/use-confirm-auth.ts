import { postConfirmAuth } from "@shared/api"
import { useMutation } from "react-query"

export const useConfirmAuth = () => {
    const mutate = useMutation({
        mutationFn: postConfirmAuth
    })

    return mutate
}