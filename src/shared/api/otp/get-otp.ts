import { authApi } from "./lib"
import { OTPCodeResponse, OTPCodeRequest } from "./model"

export const postOTPCode = async (body: OTPCodeRequest) => {
    const response = await authApi.post<OTPCodeResponse>('/login', body)
    return response.data
}