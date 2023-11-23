import { postLogin } from "@shared/api"
import { useMutation } from "react-query"

export const useLogin = () => {
    const mutate = useMutation({
        mutationFn: postLogin
    })

    return mutate
}