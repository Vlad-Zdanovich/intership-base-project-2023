import { postOTPCode } from "@shared/api/otp"
import { useMutation } from "react-query"

export const useOTP = () => {
    const { isLoading, mutate } = useMutation({
        mutationFn: postOTPCode
    })

    return {
        getOTPCode: mutate,
        isLoading: isLoading
    }
}