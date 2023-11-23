import { authApi } from "../otp/lib"
import { ConfirmAuthResponse, TConfirmAuthRequest } from "./types"

export const postConfirmAuth = async (body: TConfirmAuthRequest) => {
    const response = await authApi.post<ConfirmAuthResponse>("/confirm", body)
    return response.data
}