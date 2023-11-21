import { postOTPCode } from "@shared/api/otp"
import { useMutation } from "react-query"

export const useOTP = () => {
    const mutate = useMutation({
        mutationFn: postOTPCode
    })

    return mutate
}